# frozen_string_literal: true

class AddWeeklyCreditCountToPlans < ActiveRecord::Migration[6.1]
  def change
    add_column :plans, :weekly_credit_count, :integer, default: 0
  end
end
