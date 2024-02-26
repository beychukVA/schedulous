# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ProgramReservation, type: :model do
  describe "Associations" do
    it { should belong_to(:person) }
    it { should belong_to(:program_instance) }
    it { should have_one(:used_credit) }
  end

  describe 'Scopes' do
    it 'in_week' do
      program_instance = create(:program_instance, date: Date.current)
      program_reservations = create_list(:program_reservation, 5, program_instance: program_instance)

      expect(program_reservations.count).to eq(5)
    end
  end
end

# == Schema Information
#
# Table name: program_reservations
#
#  id                  :bigint           not null, primary key
#  attend              :boolean          default(FALSE)
#  canceled_at         :datetime
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  person_id           :bigint
#  program_instance_id :bigint
#
# Indexes
#
#  index_program_reservations_on_person_id            (person_id)
#  index_program_reservations_on_program_instance_id  (program_instance_id)
#
