# frozen_string_literal: true

module Mutations
  class UserCreate < BaseMutation
    # Person Attributes
    argument :name, String, required: false

    # User Attributes
    argument :email, String, required: false
    argument :password, String, required: false
    argument :account_name, String, required: false
    argument :account_id, ID, required: false

    returns Types::UserType

    def perform(input)
      user = Users::CreateService.new(input).perform

      controller.sign_in(user) if user.persisted?

      user
    end
  end
end
