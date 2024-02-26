# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Credit, type: :model do
  describe 'Associations' do
    it { should belong_to(:person) }
  end

  describe 'Validations' do
    it { should validate_presence_of(:amount) }
    it { should validate_numericality_of(:amount).is_greater_than_or_equal_to(0) }
  end

  describe '#deduct_amount' do
    it 'update amount' do
      credit = create(:credit, amount: 3)
      credit.deduct_amount(1)

      expect(credit.amount).to eq(2)
    end
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
