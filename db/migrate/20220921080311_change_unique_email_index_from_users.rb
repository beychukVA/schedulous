# frozen_string_literal: true

class ChangeUniqueEmailIndexFromUsers < ActiveRecord::Migration[6.1]
  def change
    remove_index :users, :email
    add_index :users, [:email, :account_id], unique: true
  end
end
