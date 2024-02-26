# frozen_string_literal: true

module Mutations
  class ProgramUpdate < BaseMutation
    argument :id, ID, required: true
    argument :program_params, Types::Input::ProgramInputType, required: true

    returns Types::ProgramType

    def perform(id:, program_params:, **args)
      program = current_account.programs.find(id)
      program.update(program_params)

      program
    end
  end
end
