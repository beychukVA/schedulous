# frozen_string_literal: true

module Mutations
  class ProgramCreate < BaseMutation
    argument :program_params, Types::Input::ProgramInputType, required: true

    returns Types::ProgramType

    def perform(program_params:, **args)
      Program.create(program_params)
    end
  end
end
