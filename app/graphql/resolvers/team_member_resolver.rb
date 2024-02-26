# frozen_string_literal: true

module Resolvers
  class TeamMemberResolver < BaseResolver
    type Types::TeamMemberType, null: true

    argument :id, ID, required: true

    def resolve(id:)
      current_account.plans.find(id)
    end
  end
end
