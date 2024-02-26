# frozen_string_literal: true

module Mutations
  class UserSendResetPasswordInstructions < BaseMutation
    argument :email, String, required: false

    returns Types::UserType

    def perform(input)
      User.send_reset_password_instructions(email: input[:email])
    end
  end
end
