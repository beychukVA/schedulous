# frozen_string_literal: true

module Types
  class TeamMemberType < Types::BaseObject
    description "A team member record"

    field :id, ID, null: false
    field :user, Types::UserType, null: false
    field :role, String, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
