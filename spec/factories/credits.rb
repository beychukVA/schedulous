# frozen_string_literal: true

FactoryBot.define do
  factory :credit do
    expiration_at { "2022-09-21 17:58:22" }
    amount { 1 }
    association :person
  end
end

# == Schema Information
#
# Table name: credits
#
#  id             :bigint           not null, primary key
#  amount         :integer          default(0)
#  distributed_at :datetime
#  expiration_at  :datetime
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  person_id      :bigint
#
# Indexes
#
#  index_credits_on_person_id  (person_id)
#
