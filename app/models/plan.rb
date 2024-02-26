# frozen_string_literal: true

class Plan < ApplicationRecord
  include AccountAsTenant
  include Trashable

  INTERVAL_TYPES = %i[day week month year].freeze

  enum interval_type: INTERVAL_TYPES
  enum plan_duration_type: INTERVAL_TYPES, _prefix: :expiration

  validates :name, presence: true
  validates :amount, presence: true, numericality: { greater_than_or_equal_to: 0 }
  validates :interval, presence: true, numericality: { greater_than_or_equal_to: 1 }
  validates :interval_type, presence: true, inclusion: { in: interval_types.keys }
  validates :plan_duration, presence: true, numericality: { greater_than_or_equal_to: 0 }, if: proc { onetime? }
  validates :plan_duration_type, presence: true, inclusion: { in: interval_types.keys }, if: proc { onetime? }
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
