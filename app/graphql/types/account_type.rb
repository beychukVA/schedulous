# frozen_string_literal: true

module Types
  class AccountType < Types::BaseObject
    description "An account record"

    field :id, ID, null: false
    field :name, String, null: false
    field :time_zone, String, null: false
    field :has_stripe, Boolean, null: false

    field :address, String, null: true
    field :unit, String, null: true
    field :city, String, null: true
    field :state, String, null: true
    field :zip, String, null: true
    field :phone, String, null: true

    field :current_software, String, null: true
    field :interest_stage, String, null: true
    field :total_members, String, null: true
    field :years_in_business, String, null: true

    field :message_templates, [Types::MessageTemplateType], null: false
    field :people, [Types::PersonType], null: false
    field :plans, [Types::PlanType], null: false
    field :team_members, [Types::TeamMemberType], null: false
    field :users, [Types::UserType], null: false

    def has_stripe
      object.has_stripe?
    end

    def time_zone
      object.time_zone || "Pacific Time (US & Canada)"
    end
  end
end
