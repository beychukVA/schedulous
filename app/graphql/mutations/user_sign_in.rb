# frozen_string_literal: true

module Mutations
  class UserSignIn < BaseMutation
    argument :account_id, String, required: false
    argument :email, String, required: false
    argument :password, String, required: false

    returns Types::UserType

    def perform(input)
      user = User.find_for_auth!(
        email: input[:email],
        account_id: input[:account_id]
      )

      if user.authenticate!(input[:password])
        controller.sign_in(:user, user)

        user
      end

      user
    end
  end
end
