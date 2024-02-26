# frozen_string_literal: true

module Mutations
  class MessageTemplateDestroy < BaseMutation
    argument :id, ID, required: true
    returns Types::MessageTemplateType

    def perform(id:)
      template = current_account.message_templates.find(id)

      template.destroy
    end
  end
end
