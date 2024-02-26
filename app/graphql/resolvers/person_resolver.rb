# frozen_string_literal: true

module Resolvers
  class PersonResolver < BaseResolver
    type Types::PersonType, null: true

    argument :id, ID, required: true

    def resolve(id:)
      current_account.people.find(id)
    end
  end
end
