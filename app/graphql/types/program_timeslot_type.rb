# frozen_string_literal: true

module Types
  class ProgramTimeslotType < Types::BaseObject
    description "A program timeslot record"

    field :id, ID, null: false
    field :monday, Boolean, null: true
    field :tuesday, Boolean, null: true
    field :wednesday, Boolean, null: true
    field :thursday, Boolean, null: true
    field :friday, Boolean, null: true
    field :saturday, Boolean, null: true
    field :sunday, Boolean, null: true
    field :hour, String, null: false
    field :meridiem, String, null: false
    field :minute, String, null: false
    field :account_id, Int, null: false
    field :program_id, Int, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
