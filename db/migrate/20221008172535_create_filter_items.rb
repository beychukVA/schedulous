# frozen_string_literal: true

class CreateFilterItems < ActiveRecord::Migration[6.1]
  def change
    create_table :filter_items do |t|
      t.belongs_to :filter
      t.integer :position, default: 0
      t.string :condition, default: "and"
      t.string :filterable
      t.string :option
      t.jsonb :value
      t.timestamps
    end
  end
end
