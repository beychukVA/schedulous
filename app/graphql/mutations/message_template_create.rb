# frozen_string_literal: true

module Mutations
  class MessageTemplateCreate < BaseMutation
    argument :body, String, required: true
    argument :description, String, required: false

    returns Types::MessageTemplateType

    def perform(input)
      input.merge!(
        user: current_user,
        account: current_account
      )

      current_account.message_templates.create!(input)
    end
  end
end
