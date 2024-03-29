# frozen_string_literal: true

class Person < ApplicationRecord
  include AccountAsTenant

  attr_accessor :family_id, :user_id

  has_person_name

  has_one :user, dependent: :destroy
  has_one :family_member, dependent: :destroy
  has_one :family, through: :family_member
  has_many :program_reservations, foreign_key: :person_id, dependent: :destroy
  has_many :credits, dependent: :destroy
  has_many :used_credits, dependent: :destroy

  delegate :email, :phone, to: :user, allow_nil: true

  validates :name, presence: true

  validate :presence_of_user, on: :create, if: proc { user_id.present? }
  validate :presence_of_family, on: :create, if: proc { family_id.present? }
  # TODO: Fix this
  # validates :user, presence: true, on: :create, if: proc { user_id.blank? && family_id.blank? }

  accepts_nested_attributes_for :account
  accepts_nested_attributes_for :user

  def has_user?
    user.present?
  end

  def credits_of_current_week
    credits.by_distributed_time(Time.current).take
  end

  private
    def presence_of_user
      unless User.exists?(id: user_id)
        errors.add :user_id, "not exist"
      end
    end

  def presence_of_family
    unless Family.exists?(id: family_id)
      errors.add :family_id, "not exist"
    end
  end
end

# == Schema Information
#
# Table name: people
#
#  id                      :bigint           not null, primary key
#  avatar                  :string
#  classes_attended_count  :integer          default(0)
#  classes_cancelled_count :integer          default(0)
#  classes_missed_count    :integer          default(0)
#  classes_reserved_count  :integer          default(0)
#  dob                     :date
#  first_name              :string
#  last_class_attended_at  :datetime
#  last_class_canceled_at  :datetime
#  last_class_missed_at    :datetime
#  last_name               :string
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#  account_id              :bigint
#
# Indexes
#
#  index_people_on_account_id  (account_id)
#
