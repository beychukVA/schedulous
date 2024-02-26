# frozen_string_literal: true

json.extract! account, :id, :address, :city, :current_software, :interest_stage, :name, :phone, :state, :time_zone, :total_members, :unit, :years_in_business, :zip, :twillio_account_sid, :twillio_auth_token
json.has_stripe account.has_stripe?
