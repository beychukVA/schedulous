# frozen_string_literal: true

module UserAuth
  extend ActiveSupport::Concern

  included do
    def self.find_for_auth!(email:, account_id:)
      ActsAsTenant.current_tenant = Account.find(account_id)
      find_by!(email: email)
    rescue ActiveRecord::RecordNotFound
      user = User.new
      user.errors.add(:email, 'Email or password is invalid')
      raise ActiveRecord::RecordInvalid.new(user)
    end
  end

  def authenticate!(password)
    errors.add(:email, 'Email or password is invalid') unless valid_password?(password)

    raise ActiveRecord::RecordInvalid.new(self) if errors.any?

    self
  end
end
