# frozen_string_literal: true

FactoryBot.define do
  factory :plan do
    association(:account)
    name { "MyString" }
    description { "MyText" }
    stripe_id { "prod_1234567890" }
    amount { 9.99 }
    interval { 1 }
    interval_type { :month }
    trashed_at { nil }

    trait :onetime do
      onetime { true }
      initial_amount { 599 }
      plan_duration { 6 }
      plan_duration_type { :week }
      stripe_id { nil }
    end
  end
end

# == Schema Information
#
# Table name: plans
#
#  id                  :bigint           not null, primary key
#  amount              :decimal(8, 2)    default(0.0), not null
#  description         :string
#  initial_amount      :decimal(8, 2)    default(0.0), not null
#  interval            :integer          default(1), not null
#  interval_type       :integer          default("day"), not null
#  name                :string           not null
#  onetime             :boolean          default(FALSE), not null
#  plan_duration       :integer          default(0), not null
#  plan_duration_type  :integer          default("day"), not null
#  trashed_at          :datetime
#  weekly_credit_count :integer          default(0)
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  account_id          :bigint
#  stripe_id           :string           not null
#
# Indexes
#
#  index_plans_on_account_id  (account_id)
#
