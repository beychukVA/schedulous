# frozen_string_literal: true

module External
  module Twilio
    class Connected < Base
      def perform
        @client.api.accounts.list.first.friendly_name.present?
      rescue
        false
      end
    end
  end
end
