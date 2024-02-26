# frozen_string_literal: true

module Types
  class UserInputType < Types::BaseInputObject
    description "Attributes for creating or updating a user"

    argument :email, String, required: false
    argument :phone, String, required: false
    argument :password, String, required: false
    argument :skip_password, String, required: false

    def prepare
      to_h
    end
  end
end
