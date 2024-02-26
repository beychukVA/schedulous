# frozen_string_literal: true

module Resolvers
  class MessageTemplatesResolver < BaseResolver
    type [Types::MessageTemplateType], null: true

    def resolve
      current_account.message_templates
    end
  end
end
