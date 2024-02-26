# frozen_string_literal: true

module Types
  module Input
    class ProgramInputType < Types::BaseInputObject
      description "Attributes for creating or updating a program"

      argument :id, ID, required: false
      argument :name, String, required: false
      argument :description, String, required: false
      argument :capacity, String, required: false
      argument :start_date, String, required: false
      argument :image, String, required: false
      argument :duration, String, required: false
      argument :program_timeslots_attributes, [Types::Input::ProgramTimeslotInputType], required: false

      def prepare
        to_h
      end
    end
  end
end
