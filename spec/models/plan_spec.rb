# frozen_string_literal: true

require 'rails_helper'
require_relative 'concerns/account_as_tenant_shared'

RSpec.describe Plan, type: :model do
  it_behaves_like "Account as a Tenant"

  describe "sane factory" do
    it "should be valid" do
      expect(build(:plan)).to be_valid
    end
  end

  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:amount) }
  it { should validate_numericality_of(:amount).is_greater_than_or_equal_to(0) }
  it { should validate_presence_of(:interval) }
  it { should validate_numericality_of(:interval).is_greater_than_or_equal_to(1) }
  it { should validate_presence_of(:interval_type) }

  describe "plan duration and type validation" do
    context "if one time" do
      before { allow(subject).to receive(:onetime?).and_return(true) }
      it { should validate_presence_of(:plan_duration) }
      it { should validate_presence_of(:plan_duration_type) }
    end

    context "if one time" do
      before { allow(subject).to receive(:onetime?).and_return(false) }
      it { should_not validate_presence_of(:plan_duration) }
      it { should_not validate_presence_of(:plan_duration_type) }
    end
end

  describe "scopes" do
    describe ".not_trashed" do
      it "should return only not_trashed plans" do
        create(:plan, trashed_at: Time.current)
        create(:plan, trashed_at: nil)
        expect(Plan.not_trashed.count).to eq(1)
      end
    end

    describe ".trashed" do
      it "should return only trashed plans" do
        create(:plan, trashed_at: Time.current)
        create(:plan, trashed_at: nil)
        expect(Plan.trashed.count).to eq(1)
      end
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
