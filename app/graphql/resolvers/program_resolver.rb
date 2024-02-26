# frozen_string_literal: true

module Resolvers
  class ProgramResolver < BaseResolver
    type Types::ProgramType, null: true

    argument :id, ID, required: true

    def resolve(id:)
      current_account.programs.find(id)
    end
  end
end
