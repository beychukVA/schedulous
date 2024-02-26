# frozen_string_literal: true

module Types
  class FilterType < Types::BaseObject
    description "A filter record"

    field :id, ID, null: false
    field :base64, String, null: false
    field :user, Types::UserType, null: true
    field :account, Types::AccountType, null: true
    field :filter_items, [Types::FilterItemType], null: true
  end
end
