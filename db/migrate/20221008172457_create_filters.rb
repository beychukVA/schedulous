# frozen_string_literal: true

class CreateFilters < ActiveRecord::Migration[6.1]
  def change
    create_table :filters do |t|
      t.string :encoded_string
      t.string :name
      t.belongs_to :account
      t.belongs_to :user
      t.boolean :template, default: false
      t.boolean :saved, default: false
      t.timestamps
    end
  end
end
