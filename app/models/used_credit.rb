# frozen_string_literal: true

class UsedCredit < ApplicationRecord
  belongs_to :program_reservation
  belongs_to :person

  scope :in_week_of, -> (date) {
    where(date: [date.beginning_of_week..date.end_of_week])
  }
end

# == Schema Information
#
# Table name: used_credits
#
#  id                     :bigint           not null, primary key
#  amount                 :integer
#  date                   :date
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  person_id              :bigint
#  program_reservation_id :bigint
#
# Indexes
#
#  index_used_credits_on_person_id               (person_id)
#  index_used_credits_on_program_reservation_id  (program_reservation_id)
#
