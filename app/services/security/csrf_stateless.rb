# frozen_string_literal: true

module Security::CsrfStateless
  extend ActiveSupport::Concern

  included do
    skip_before_action :verify_authenticity_token
    before_action :verify_x_request_with_header
  end

  private

  def verify_x_request_with_header
    return if Rails.env.test? || Rails.env.development?
    raise "Invalid or missing X-Requested-With Header value - #{request.headers['X-Requested-With']}" unless request.xhr?
  end
end
