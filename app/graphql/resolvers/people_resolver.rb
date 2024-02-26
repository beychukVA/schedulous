# frozen_string_literal: true

module Resolvers
  class PeopleResolver < BaseResolver
    type [Types::PersonType], null: true

    argument :type, String, required: false

    def resolve(type: "all")
      case type
      when "all"
        current_account.people.all
      when "users"
        current_account.people.joins(:user).where.not(users: { id: nil })
      end
    end
  end
end
