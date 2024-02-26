# frozen_string_literal: true

class ProgramInstance < ApplicationRecord
  include AccountAsTenant
  include ExplicitCounterCache

  belongs_to :program
  belongs_to :program_timeslot
  has_many :program_reservations, dependent: :destroy

  delegate :hour, :meridiem, :minute, to: :program_timeslot, allow_nil: true
  delegate :capacity, :duration, :description, :image_url, :name, to: :program, allow_nil: true

  explicit_counter_cache :program_reservations_count, -> { program_reservations.without_canceled.count }

  scope :in_week, ->(date) {
    where(date: (date.beginning_of_week..date.end_of_week))
  }

  def datetime
    DateTime.new(date.year, date.month, date.day, (military_start_time / 100), minute)
  end

  def military_start_time
    (hour + (meridiem == 'pm' ? 12 : 0)) * 100 + minute
  end

  def military_end_time
    duration_in_hours = duration / 60

    end_time = military_start_time + (duration_in_hours * 100)

    end_time > 2400 ? end_time - 2400 : end_time
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
