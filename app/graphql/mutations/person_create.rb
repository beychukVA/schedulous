# frozen_string_literal: true

module Mutations
  class PersonCreate < BaseMutation
    # Person Attributes
    argument :name, String, required: false

    # User Attributes
    argument :user, Types::UserInputType, required: false

    returns Types::PersonType

    def perform(input)
      person = current_account.people.new(input.slice(:name))
      person.build_user(account: current_account, **input[:user]) if input[:user].present?

      person.save

      person
    end
  end
end
