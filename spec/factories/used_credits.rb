# frozen_string_literal: true

FactoryBot.define do
  factory :used_credit do
    amount { 1 }
    date { "2022-09-26" }
    program_reservation
    person
  end
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
