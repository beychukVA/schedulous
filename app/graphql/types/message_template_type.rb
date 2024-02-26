# frozen_string_literal: true

module Types
  class MessageTemplateType < Types::BaseObject
    description "A message template record"

    field :id, ID, null: false
    field :body, String, null: false
    field :user, Types::UserType, null: true
    field :account, Types::AccountType, null: true
  end
end
