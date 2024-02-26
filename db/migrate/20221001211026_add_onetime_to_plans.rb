# frozen_string_literal: true

class AddOnetimeToPlans < ActiveRecord::Migration[6.1]
  def change
    add_column :plans, :onetime, :boolean, default: false, null: false
    add_column :plans, :initial_amount, :decimal, precision: 8, scale: 2, default: 0.0, null: false
    add_column :plans, :plan_duration, :integer, default: 0, null: false
    add_column :plans, :plan_duration_type, :integer, default: 0, null: false
  end
end
