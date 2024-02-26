# frozen_string_literal: true

module Mutations
  class PlanUpdate < BaseMutation
    argument_record :plan, Plan
    argument :name, String, required: true

    returns Types::PlanType

    def perform(plan:, **attributes)
      plan.update(attributes)

      plan
    end
  end
end
