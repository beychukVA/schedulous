# frozen_string_literal: true

module Mutations
  class FilterCreate < BaseMutation
    argument :base64, String, required: false
    argument :name, String, required: false

    returns Types::FilterType

    def perform(base64: nil, name: nil)
      filter = Filter.find_by(base64: base64)

      filter.update(
        name: name,
        user: current_user,
        saved: true
      ) if filter.present?

      filter
    end
  end
end
