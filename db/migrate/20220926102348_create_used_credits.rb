# frozen_string_literal: true

class CreateUsedCredits < ActiveRecord::Migration[6.1]
  def change
    create_table :used_credits do |t|
      t.integer :amount
      t.date :date
      t.references :program_reservation
      t.references :person

      t.timestamps
    end
  end
end
