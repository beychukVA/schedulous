# frozen_string_literal: true

class AddColumnTwillioAccountSidAndTwillioAuthTokenToAccounts < ActiveRecord::Migration[6.1]
  def change
    add_column :accounts, :twillio_account_sid, :string
    add_column :accounts, :twillio_auth_token, :string
  end
end
