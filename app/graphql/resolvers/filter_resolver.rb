# frozen_string_literal: true

module Resolvers
  class FilterResolver < BaseResolver
    type Types::FilterType, null: false

    argument :base64, String, required: false
    argument :id, ID, required: false

    def resolve
      return Filter.none if base64.nil? && id.nil?

      current_account.filters
                     .find_by(base64: base64)
                     .or(current_account.filters.find_by(id: id))
    end
  end
end
