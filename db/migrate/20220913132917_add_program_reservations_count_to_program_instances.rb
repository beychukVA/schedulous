# frozen_string_literal: true

class AddProgramReservationsCountToProgramInstances < ActiveRecord::Migration[6.1]
  def change
    add_column :program_instances, :program_reservations_count, :integer, default: 0
  end
end
