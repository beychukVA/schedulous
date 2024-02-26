# frozen_string_literal: true

module Types
  class BaseObject < GraphQL::Schema::Object
    edge_type_class(Types::BaseEdge)
    connection_type_class(Types::BaseConnection)
    field_class Types::BaseField

    def current_user
      context[:current_user]
    end

    def current_account
      current_user&.account
    end

    def cookies
      context[:cookies]
    end

    def session
      context[:session]
    end

    def request
      context[:request]
    end

    def controller
      context[:controller]
    end

    def visitor_id
      context[:visitor_id]
    end
  end
end
