# frozen_string_literal: true

module Resolvers
  class ProgramInstancesResolver < BaseResolver
    argument :start_date, String, required: false
    argument :end_date, String, required: false

    type [Types::ProgramInstanceType], null: true

    def resolve(**input)
      Programs::InstanceRetrieveService.new(input, current_account).perform
    end
  end
end
