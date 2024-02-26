# frozen_string_literal: true

class Accounts::SetupService < BaseService
  def initialize(account)
    @account = account
  end

  def perform
    TeamMember.create!(account: @account, user: @account.users.first, role: :owner)
  end
end
