# frozen_string_literal: true

class Account < ApplicationRecord
  has_many :people, dependent: :destroy
  has_many :users, dependent: :destroy
  has_many :plans, dependent: :destroy
  has_many :team_members, dependent: :destroy
  has_many :message_templates, dependent: :destroy
  has_many :programs, dependent: :destroy
  has_many :program_timeslots, dependent: :destroy
  has_many :program_instances, dependent: :destroy
  has_many :filters, dependent: :destroy

  validates :name, presence: true

  after_commit do
    Accounts::SetupService.perform(self) unless users.empty?
  end

  def has_stripe?
    stripe_id.present?
  end
end

# == Schema Information
#
# Table name: accounts
#
#  id                  :bigint           not null, primary key
#  address             :string
#  city                :string
#  current_software    :string
#  interest_stage      :string
#  name                :string
#  phone               :string
#  state               :string
#  time_zone           :string
#  total_members       :string
#  twillio_account_sid :string
#  twillio_auth_token  :string
#  unit                :string
#  years_in_business   :string
#  zip                 :string
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  stripe_id           :string
#
