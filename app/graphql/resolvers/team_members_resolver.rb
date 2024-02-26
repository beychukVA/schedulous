# frozen_string_literal: true

module Resolvers
  class TeamMembersResolver < BaseResolver
    type [Types::TeamMemberType], null: true

    def resolve
      current_account.team_members
    end
  end
end
