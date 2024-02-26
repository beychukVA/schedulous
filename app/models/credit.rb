# frozen_string_literal: true

class Credit < ApplicationRecord
  belongs_to :person

  AMOUNT_DEFAULT = 3

  validates :amount, presence: true, numericality: { greater_than_or_equal_to: 0 }

  scope :by_distributed_time, ->(time) {
    where("distributed_at <= :time AND expiration_at >= :time", time: time)
  }

  def deduct_amount(number)
    update(amount: amount - number)
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
