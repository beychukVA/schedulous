# frozen_string_literal: true

module Types
  class UserType < Types::BaseObject
    description "A user record"

    field :id, ID, null: false
    field :email, String, null: false
    field :phone, String, null: false
    field :account_id, String, null: false
    field :person, Types::PersonType, null: false
    field :account, Types::AccountType, null: false
  end
end
