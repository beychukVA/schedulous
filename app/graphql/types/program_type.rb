# frozen_string_literal: true

module Types
  class ProgramType < Types::BaseObject
    description "A program record"

    field :id, ID, null: false
    field :name, String, null: false
    field :description, String, null: true
    field :capacity, String, null: true
    field :start_date, GraphQL::Types::ISO8601Date, null: true
    field :image, String, null: false
    field :frequency, String, null: false
    field :duration, String, null: false
    field :program_timeslots, [Types::ProgramTimeslotType], null: false
  end
end
