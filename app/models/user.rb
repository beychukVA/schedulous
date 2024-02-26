# frozen_string_literal: true

class User < ApplicationRecord
  include UserAuth
  include AccountAsTenant

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable

  attr_accessor :name
  attr_accessor :skip_password

  belongs_to :person

  accepts_nested_attributes_for :person, allow_destroy: true
  accepts_nested_attributes_for :account, allow_destroy: true

  before_validation :set_person, on: :create, if: proc { person.blank? }
  validates :name, presence: true, on: :create, unless: :person_present?

  # modify email validations of devise
  validates_uniqueness_of :email, scope: :account_id
  validates_format_of     :email, with: Devise.email_regexp

  def set_person
    self.build_person(name: self.name, account: self.account)
  end

  def password_required?
    return false if skip_password.present?
    super
  end

  def person_present?
    person.present?
  end

  def is_admin?
    account.team_members.admins.collect(&:user_id).include?(id)
  end

  def is_team_member?
    account.team_members.collect(&:user_id).include?(id)
  end

  private
    # modify email validations of devise
    def will_save_change_to_email?
      false
    end
end

# == Schema Information
#
# Table name: users
#
#  id                             :bigint           not null, primary key
#  appointments_attended_count    :integer          default(0)
#  appointments_cancelled_count   :integer          default(0)
#  appointments_missed_count      :integer          default(0)
#  appointments_rescheduled_count :integer          default(0)
#  appointments_reserved_count    :integer          default(0)
#  confirmation_sent_at           :datetime
#  confirmation_token             :string
#  confirmed_at                   :datetime
#  email                          :string           default(""), not null
#  encrypted_password             :string           default(""), not null
#  last_appointment_at            :datetime
#  last_appointment_attended_at   :datetime
#  last_appointment_canceled_at   :datetime
#  last_appointment_missed_at     :datetime
#  last_message_received_at       :datetime
#  last_message_sent_at           :datetime
#  membership_created_at          :datetime
#  membership_expires_at          :datetime
#  phone                          :string
#  remember_created_at            :datetime
#  reset_password_sent_at         :datetime
#  reset_password_token           :string
#  unconfirmed_email              :string
#  created_at                     :datetime         not null
#  updated_at                     :datetime         not null
#  account_id                     :bigint
#  person_id                      :bigint
#
# Indexes
#
#  index_users_on_account_id            (account_id)
#  index_users_on_email_and_account_id  (email,account_id) UNIQUE
#  index_users_on_person_id             (person_id)
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#
