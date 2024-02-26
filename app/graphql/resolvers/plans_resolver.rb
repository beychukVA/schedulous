# frozen_string_literal: true

module Resolvers
  class PlansResolver < BaseResolver
    type [Types::PlanType], null: true

    def resolve(type: "all")
      case type
      when "all"
        current_account.plans
      when "trashed"
        current_account.plans.trashed
      when "not_trashed"
        current_account.plans.not_trashed
      end
    end
  end
end
