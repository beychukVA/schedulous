# frozen_string_literal: true

module Types
  class FilterItemType < Types::BaseObject
    description "A filter item record"

    field :id, ID, null: false
    field :filter, Types::FilterType, null: false
    field :filterable, String, null: false
    field :option, String, null: false
    field :value, String, null: false
    field :position, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
