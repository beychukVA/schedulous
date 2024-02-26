# frozen_string_literal: true

module Mutations
  class UserResetPassword < BaseMutation
    argument :reset_password_token, String, required: false
    argument :password, String, required: false
    argument :password_confirmation, String, required: false

    returns Types::UserType

    def perform(input)
      User.reset_password_by_token(
        reset_password_token: input[:reset_password_token],
        password: input[:password],
        password_confirmation: input[:password_confirmation]
      )
    end
  end
end
