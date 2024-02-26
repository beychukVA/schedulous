# frozen_string_literal: true

class External::Twilio::Base
  def initialize(twilio_account_sid, twilio_auth_token)
    @client = Twilio::REST::Client.new(
      twilio_account_sid,
      twilio_auth_token
    )
  end
end
