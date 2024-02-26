# frozen_string_literal: true

module Resolvers
  class ProgramsResolver < BaseResolver
    type [Types::ProgramType], null: true

    def resolve
      current_account.programs
    end
  end
end
