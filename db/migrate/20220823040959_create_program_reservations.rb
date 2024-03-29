# frozen_string_literal: true

class CreateProgramReservations < ActiveRecord::Migration[6.1]
  def change
    create_table :program_reservations do |t|
      t.references :person
      t.references :program_instance
      t.boolean :attend, default: false
      t.datetime :canceled_at
      t.timestamps
    end
  end
end
