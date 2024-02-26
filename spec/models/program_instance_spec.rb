# frozen_string_literal: true

require 'rails_helper'
require_relative 'concerns/account_as_tenant_shared'

RSpec.describe ProgramInstance, type: :model do
  it_behaves_like "Account as a Tenant"

  it { should belong_to(:program) }
  it { should belong_to(:program_timeslot) }
  it { should have_many(:program_reservations) }
  it { should delegate_method(:hour).to(:program_timeslot) }
  it { should delegate_method(:meridiem).to(:program_timeslot) }
  it { should delegate_method(:minute).to(:program_timeslot) }
  it { should delegate_method(:capacity).to(:program) }
  it { should delegate_method(:description).to(:program) }
  it { should delegate_method(:image_url).to(:program) }
  it { should delegate_method(:name).to(:program) }

  describe 'Scopes' do
    it 'in_week' do
      create_list(:program_instance, 5, date: Date.current)

      expect(ProgramInstance.in_week(Date.current).count).to eq(5)
    end
  end

  describe '#military_start_time' do
    let(:program_instance) { build(:program_instance) }

    it 'returns the military start time' do
      expect(program_instance.military_start_time).to eq((program_instance.hour + (program_instance.meridiem == 'pm' ? 12 : 0)) * 100 + program_instance.minute)
    end
  end

  describe '#military_end_time' do
    let(:program_instance) { build(:program_instance) }

    it 'returns the military end time' do
      duration_in_hours = program_instance.duration / 60

      expect(program_instance.military_end_time).to eq(program_instance.military_start_time + (duration_in_hours * 100))
    end
  end

  describe '#program_reservations_count' do
    let(:program_instance) { create(:program_instance) }

    it 'returns the number of program reservations' do
      create(:program_reservation, program_instance: program_instance)
      create(:program_reservation, program_instance: program_instance, canceled_at: Time.current)

      expect(program_instance.program_reservations_count).to eq(program_instance.program_reservations.without_canceled.count)
    end
  end
end

# == Schema Information
#
# Table name: program_instances
#
#  id                         :bigint           not null, primary key
#  date                       :date
#  program_reservations_count :integer          default(0)
#  created_at                 :datetime         not null
#  updated_at                 :datetime         not null
#  account_id                 :bigint
#  program_id                 :bigint
#  program_timeslot_id        :bigint
#
# Indexes
#
#  index_program_instances_on_account_id           (account_id)
#  index_program_instances_on_program_id           (program_id)
#  index_program_instances_on_program_timeslot_id  (program_timeslot_id)
#
