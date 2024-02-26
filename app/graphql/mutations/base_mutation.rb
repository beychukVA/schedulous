# frozen_string_literal: true

module Mutations
  class BaseMutation < GraphQL::Schema::RelayClassicMutation
    null false

    argument 'source_component', String, required: false

    field :errors, [Types::ErrorType], null: false

    # delegate :current_user, :request, to: :context

    def perform(_inputs)
      raise NotImplementedError
    end

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

    # rubocop:disable Metrics/PerceivedComplexity
    def resolve(inputs = {})
      Helper.authorize!(current_user, self.class.authorize_rules) unless self.class.authorize_rules.nil?

      inputs = Helper.find_records(current_user, self.class.record_rules, inputs) unless self.class.record_rules.nil?

      result = method(:perform).arity.zero? ? perform : perform(inputs)

      if result.respond_to?(:errors) && result.errors.any?
        { errors: Error.from_record(result) }
      elsif result.respond_to?(:graphql_result)
        success result.graphql_result
      elsif result.is_a?(Hash)
        if result[:node].present? && result[:node].respond_to?(:errors) && result[:node].errors.any?
          { errors: Error.from_record(result[:node]) }
        else
          result[:errors] ||= []
          result
        end
      else
        success result
      end
    rescue ActiveRecord::RecordInvalid => e
      { errors: Error.from_record(e.record) }
    rescue ActiveRecord::RecordNotFound
      error :base, :record_not_found
    rescue KittyPolicy::AccessDenied
      error :base, :access_denied
    end
    # rubocop:enable Metrics/PerceivedComplexity

    def error(field, message)
      { errors: [Error.new(field, message)] }
    end

    def success(node = nil)
      if node.present?
        { node: node, errors: [] }
      else
        { errors: [] }
      end
    end

    class << self
      def inherited(base)
        base.instance_eval do
          @authorize_rules = nil
          @record_rules = nil
        end
      end

      def returns(type)
        field :node, type, null: true
      end

      def authorize(*authorize_rules)
        @authorize_rules = authorize_rules
      end

      def argument_record(name, klass, required: true, authorize: nil)
        @record_rules ||= {}
        @record_rules[name] = [klass, required, authorize]

        argument "#{name}_id", GraphQL::Types::ID, required: required
        argument "#{name}_type", GraphQL::Types::ID, required: required if klass.is_a?(Array)
      end

      # :api: private
      attr_reader :record_rules, :authorize_rules
    end

    module Helper
      extend self

      # def authorize!(current_user, authorize_rules)
      #   if authorize_rules.empty?
      #     raise KittyPolicy::AccessDenied if current_user.nil?
      #   else
      #     ApplicationPolicy.authorize!(current_user, *authorize_rules)
      #   end
      # end

      def find_records(current_user, record_rules, inputs)
        record_rules.reduce(inputs.dup) do |acc, (name, (klass, required, authorize))|
          key = "#{name}_id".to_sym
          is_present = acc.key?(key)
          id = acc.delete(key)

          if !required && is_present && id.nil?
            acc[name] = nil
          elsif required || id.present?
            scope = if klass.is_a?(Array)
                      class_name = acc.delete("#{name}_type".to_sym)
                      klass.find do |c|
                        [c.name, c.name.delete(':')].include?(class_name)
                      end
            else
                      klass
            end

            raise ActiveRecord::RecordNotFound if scope.nil?

            scope = scope.not_trashed if scope.respond_to?(:not_trashed)

            acc[name] = scope.find(id)

            ApplicationPolicy.authorize!(current_user, authorize, acc[name]) if authorize
          end
          acc
        end
      end
    end

    class Error
      class << self
        def from_record(record)
          record.errors.map { |field, messages| Error.new(field, messages) }
        end
      end

      attr_reader :field, :message

      def initialize(field, message)
        @field = field.to_s.camelcase(:lower)
        @message = message
      end

      def ==(other)
        field == other.field && message == other.message
      end
    end
  end
end
