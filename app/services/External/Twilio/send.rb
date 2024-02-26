# frozen_string_literal: true

module External
  module Twilio
    class Send < Base
      def perform(to: nil, from: nil, body: nil)
        return false unless to.present? && from.present? && body.present?

        @client.api.messages.create(
          to: to,
          from: from,
          body: body
        )
      end
    end
  end
end
