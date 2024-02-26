# frozen_string_literal: true

class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.references :assignee
      t.string :name
      t.text :description
      t.datetime :completed_at
      t.references :taskable, polymorphic: true

      t.timestamps
    end
  end
end
