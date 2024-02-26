# frozen_string_literal: true

module Resolvers
  class AccountsSearchResolver < BaseResolver
    type [Types::AccountType], null: true
    argument :name, String, required: false

    def resolve(name: nil)
      Account.where("name LIKE ?", "%#{name}%")
    end
  end
end
