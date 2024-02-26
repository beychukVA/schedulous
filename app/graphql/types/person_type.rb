# frozen_string_literal: true

module Types
  class PersonType < Types::BaseObject
    description "A person record"

    field :id, ID, null: false
    field :name, String, null: false
    field :first_name, String, null: false
    field :last_name, String, null: false

    field :user, Types::UserType, null: true
  end
end
