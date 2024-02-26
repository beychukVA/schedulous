# frozen_string_literal: true

module ExplicitCounterCache
  extend ActiveSupport::Concern

  included do
    def self.explicit_counter_cache(counter_name, scope)
      define_method "refresh_#{counter_name}" do
        relation = instance_exec(&scope)
        new_count = relation

        return if self[counter_name] == new_count
        return if destroyed?

        update_columns counter_name => new_count, updated_at: Time.current # rubocop:disable Rails/SkipsModelValidations
      end
    end
  end
end
