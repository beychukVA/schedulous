# frozen_string_literal: true

class AddDefaultDurationToPrograms < ActiveRecord::Migration[6.1]
  def change
    change_column :programs, :duration, :integer, default: 60
  end
end
