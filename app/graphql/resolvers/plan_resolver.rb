# frozen_string_literal: true

module Resolvers
  class PlanResolver < BaseResolver
    type Types::PlanType, null: true

    argument :id, ID, required: true

    def resolve(id:)
      current_account.plans.find(id)
    end
  end
end
