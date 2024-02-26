# frozen_string_literal: true

module Graph
  module ControllerMethods
    def self.included(base)
      base.before_action :ensure_query
      base.rescue_from StandardError, with: :handle_error
    end

    private

    def query
      params[:query]
    end

    def variables
      ensure_hash(params[:variables])
    end

    def ensure_query
      render_error 'NO_QUERY' if query.blank?
    end

    def ensure_hash(ambiguous_param)
      case ambiguous_param
      when String
        if ambiguous_param.present?
          ensure_hash(parse_json(ambiguous_param))
        else
          {}
        end
      when Hash, ActionController::Parameters
        ambiguous_param
      when nil
        {}
      else
        raise ArgumentError, "Unexpected parameter: #{ambiguous_param}"
      end
    end

    def parse_json(data)
      JSON.parse(data)
    rescue JSON::ParserError
      {}
    end

    def handle_error(error)
      if Rails.env.development?
        logger.error error.message
        logger.error error.backtrace.join("\n")

        render_error error.message, backtrace: error.backtrace
      elsif Rails.env.test?
        p error.message # rubocop:disable Rails/Output
        p error.backtrace # rubocop:disable Rails/Output

        render_error error.message, backtrace: error.backtrace
      else
        render_error 'SERVER_ERROR'
      end
    end

    def render_error(message, backtrace: nil)
      error = { message: message }
      error[:backtrace] = backtrace

      render json: { error: error, data: {} }, status: 500
    end
  end
end
