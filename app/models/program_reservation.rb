# frozen_string_literal: true

class ProgramReservation < ApplicationRecord
  belongs_to :program_instance
  belongs_to :person
  has_one :used_credit, dependent: :destroy

  scope :canceled, -> {
    where.not(canceled_at: nil)
  }
  scope :without_canceled, -> {
    where(canceled_at: nil)
  }
  scope :checked_in, -> {
    where(attend: true)
  }
  scope :by_program_instance, -> (id) {
    where(program_instance_id: id)
  }
  scope :in_week, ->(date) {
    program_instance_ids = ProgramInstance.in_week(date)
    where(program_instance_id: program_instance_ids)
  }

  after_create :log_used_credit
  after_save :refresh_program_instance_program_reservations_count
  before_update { @is_canceled = canceled_at_changed? && canceled_at.present? }
  after_update :return_credit, if: proc { @is_canceled }

  validate :check_person_credit_balance, on: :create,
    if: proc { person.present? && program_instance.present? }

  def refresh_program_instance_program_reservations_count
    program_instance.refresh_program_reservations_count
  end

  class << self
    def filter(params)
      program_reservations = by_program_instance(params[:program_instance_id])

      if params[:canceled].present?
        program_reservations = program_reservations.canceled
      else
        program_reservations = program_reservations.without_canceled
      end

      program_reservations
    end
  end

  private

  def check_person_credit_balance
    # TODO: Get plan form person, for now we dont have the relation yet
    plan = Plan.first
    # TODO: person has unlimited plan, no need to check credit balance
    return if plan&.weekly_credit_count&.zero?

    used_credit_at_reservation_date = person.used_credits.in_week_of(program_instance.date).sum(:amount)

    remaining_amount_of_credits = if is_booking_within_current_week?
      person.credits_of_current_week&.amount.to_i - used_credit_at_reservation_date
    else
      plan.weekly_credit_count - used_credit_at_reservation_date
    end

    if remaining_amount_of_credits <= 0
      errors.add :person_id, "does not enough credits"
    end
  end

  def log_used_credit
    create_used_credit(
      amount: 1,
      date: program_instance.date,
      person_id: person_id
    )
  end

  def return_credit
    used_credit&.destroy
  end

  def is_booking_within_current_week?
    (Time.current.beginning_of_week..Time.current.end_of_week).cover?(program_instance.date)
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
