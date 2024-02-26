# frozen_string_literal: true

module Resolvers
  class PeopleFilterResolver < BaseResolver
    type [Types::PersonType], null: true

    argument :base64, String, required: false

    def resolve(base64: nil)
      return People.none if base64.nil?

      Filters::Base64Query.new(base64).perform
    end
  end
end
