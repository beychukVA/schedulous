# frozen_string_literal: true

module Types
  class PlanType < Types::BaseObject
    description "A plan record"

    field :id, ID, null: false
    field :name, String, null: false
    field :amount, Float, null: false
    field :interval, String, null: false
    field :interval_type, String, null: false
    field :onetime, String, null: false
    field :onetime_amount, Float, null: false
    field :onetime_cancels_at, GraphQL::Types::ISO8601DateTime, null: true
    field :stripe_id, String, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
