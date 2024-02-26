# frozen_string_literal: true

module Resolvers
  class BaseResolver < GraphQL::Schema::Resolver
    private
      def current_user
        @current_user ||= context[:current_user]
      end

      def current_account
        @current_account ||= current_user&.account
      end
  end
end
