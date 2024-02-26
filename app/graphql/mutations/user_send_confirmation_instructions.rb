# frozen_string_literal: true

module Mutations
  class UserSendConfirmationInstructions < BaseMutation
    argument :email, String, required: false

    returns Types::UserType

    def perform(input)
      User.send_confirmation_instructions(email: input[:email])
    end
  end
end
