# frozen_string_literal: true

class CreateMessageTemplates < ActiveRecord::Migration[6.1]
  def change
    create_table :message_templates do |t|
      t.belongs_to :account
      t.belongs_to :user
      t.string :body
      t.timestamps
    end
  end
end
