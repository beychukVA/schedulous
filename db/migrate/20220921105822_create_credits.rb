# frozen_string_literal: true

class CreateCredits < ActiveRecord::Migration[6.1]
  def change
    create_table :credits do |t|
      t.references :person
      t.datetime :expiration_at
      t.integer :amount, default: 0
      t.datetime :distributed_at

      t.timestamps
    end
  end
end
