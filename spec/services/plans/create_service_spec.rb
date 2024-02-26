# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Plans::CreateService, type: :service do
  before { StripeMock.start }
  after { StripeMock.stop }
  let(:account) { create(:account) }

  describe "#perform" do
    context "with valid data" do
      it "creates a new plan" do
        params = attributes_for(:plan)
        plan_service = Plans::CreateService.new(params, account)
        plan = plan_service.perform
        expect(plan.account.id).to eq(account.id)
        expect(plan).to be_present
      end
    end

    context "with invalid data" do
      it "returns errors" do
        params = attributes_for(:plan, name: nil)
        plan_service = Plans::CreateService.new(params, account)
        plan = plan_service.perform

        expect(plan).to be_blank
        expect(plan_service.errors).to be_present
        expect(plan_service.valid?).to be_falsey
      end
    end

    context "with onetime plan" do
      it "does not create a stripe plan" do
        params = attributes_for(:plan, :onetime)
        plan_service = Plans::CreateService.new(params, account)
        plan = plan_service.perform

        expect(Stripe::Plan).not_to receive(:create)

        expect(plan.stripe_id).to be_nil
      end
    end
  end
end
