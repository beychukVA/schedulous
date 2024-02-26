# frozen_string_literal: true

class Types::ErrorType < Types::BaseObject
  field :field, String, null: false
  field :message, String, null: false
end
