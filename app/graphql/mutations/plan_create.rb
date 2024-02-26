# frozen_string_literal: true

module Mutations
  class PlanCreate < BaseMutation
    argument :name, String, required: true
    argument :amount, String, required: true
    argument :interval, String, required: true
    argument :interval_type, String, required: true
    argument :onetime, Boolean, required: false
    argument :onetime_amount, String, required: false
    argument :plan_duration, String, required: false
    argument :plan_duration_type, String, required: false

    returns Types::PlanType

    def perform(input)
      plans_create_service = Plans::CreateService.new(input, current_account)

      plans_create_service.perform
    end
  end
end
