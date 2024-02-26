# frozen_string_literal: true

module Mutations
  class MessageTemplateUpdate < BaseMutation
    argument :body, String, required: true
    argument :description, String, required: false


    returns Types::MessageTemplateType

    def perform(id:, **input)
      template = current_account.message_templates.find(id)

      template.update(input)

      template
    end
  end
end
