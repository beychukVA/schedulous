# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :user_create, mutation: Mutations::UserCreate
    field :user_sign_in, mutation: Mutations::UserSignIn
    field :user_send_reset_password_instructions, mutation: Mutations::UserSendResetPasswordInstructions
    field :user_send_confirmation_instructions, mutation: Mutations::UserSendConfirmationInstructions
    field :user_reset_password, mutation: Mutations::UserResetPassword
    field :plan_create, mutation: Mutations::PlanCreate
    field :plan_update, mutation: Mutations::PlanUpdate
    field :person_create, mutation: Mutations::PersonCreate
    field :program_create, mutation: Mutations::ProgramCreate
    field :program_update, mutation: Mutations::ProgramUpdate
  end
end
