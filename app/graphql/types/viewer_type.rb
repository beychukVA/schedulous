# frozen_string_literal: true

module Types
  class ViewerType < Types::BaseObject
    field :id, ID, null: false
    field :email, String, null: false
    field :name, String, null: false
    field :is_admin, Boolean, null: false
    field :is_team_member, Boolean, null: false
    field :account, Types::AccountType, null: false
    field :features, [String], null: false

    def id
      current_user&.id
    end

    def email
      current_user&.email
    end

    def name
      current_user&.person&.name
    end

    def is_admin
      current_user&.is_admin?
    end

    def is_team_member
      current_user&.is_team_member?
    end

    def account
      current_user&.account
    end

    def features
      []
    end
  end
end
