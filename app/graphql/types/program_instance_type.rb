# frozen_string_literal: true

module Types
  class ProgramInstanceType < Types::BaseObject
    description "A plan record"

    field :id, ID, null: false
    field :hour, Integer, null: false
    field :minute, Integer, null: false
    field :meridiem, String, null: false
    field :capacity, Integer, null: false
    field :duration, Integer, null: false
    field :description, String, null: false
    field :image_url, String, null: false
    field :name, String, null: false
    field :program_reservations_count, Integer, null: false
    field :military_start_time, Integer, null: false
    field :military_end_time, Integer, null: false
    field :datetime, GraphQL::Types::ISO8601DateTime, null: false
    field :type, String, null: false

    def type
      "class"
    end
  end
end
