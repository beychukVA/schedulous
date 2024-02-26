# frozen_string_literal: true

module Types
  module Input
    class ProgramTimeslotInputType < Types::BaseInputObject
      description "Attributes for creating or updating a program timeslot"

      argument :id, ID, required: false
      argument :monday, Boolean, required: false
      argument :tuesday, Boolean, required: false
      argument :wednesday, Boolean, required: false
      argument :thursday, Boolean, required: false
      argument :friday, Boolean, required: false
      argument :saturday, Boolean, required: false
      argument :sunday, Boolean, required: false
      argument :hour, String, required: false
      argument :meridiem, String, required: false
      argument :minute, String, required: false
      argument :_destroy, Boolean, required: false
      argument :program_id, String, required: false

      def prepare
        to_h
      end
    end
  end
end
