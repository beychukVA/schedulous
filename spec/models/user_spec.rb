# frozen_string_literal: true

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
require 'rails_helper'
require_relative 'concerns/account_as_tenant_shared'

RSpec.describe User, type: :model do
  it_behaves_like "Account as a Tenant"

  describe "sane factory" do
    it "should be valid" do
      expect(build(:user)).to be_valid
    end
  end

  describe "Associations" do
    it { should belong_to(:person).optional }
  end

  describe "#password_required?" do
    context "when skip_password is present" do
      it "returns false" do
        user = build(:user, skip_password: true)
        expect(user.password_required?).to be false
      end
    end

    context "when skip_password is not present" do
      it "returns true" do
        user = build(:user, skip_password: false)
        expect(user.password_required?).to be true
      end
    end
  end

  describe "authenticate!" do
    it "returns true if the password is valid" do
      user = create(:user, password: "Password123$")
      user.confirm
      expect(user.authenticate!("Password123$").id).to be user.id
    end

    it "returns false if the password is invalid" do
      user = create(:user, password: "Password123$")
      expect {
        user.authenticate!("Password")
      }.to raise_error(ActiveRecord::RecordInvalid)
    end
  end

  describe "Validate email" do
    context "uniqueness with scope" do
      let (:account_a) { create(:account, name: 'Account A') }
      let (:create_user_a) { create(:user, email: 'user@gmail.com', password: '12345678', account_id: account_a.id) }

      it "return true" do
        ActsAsTenant.with_tenant(nil) do
          create_user_a
          account_b = create(:account, name: 'Account B')
          user_b = build(:user, email: 'user@gmail.com', password: '12345678', account_id: account_b.id)
          expect(user_b.valid?).to be true
        end
      end

      it "return false" do
        ActsAsTenant.with_tenant(nil) do
          create_user_a
          user_b = build(:user, email: 'user@gmail.com', password: '12345678', account_id: account_a.id)
          expect(user_b.valid?).to be false
        end
      end
    end

    context "format" do
      it "return true" do
        user = build(:user, email: 'user@gmail.com', password: '12345678')
        expect(user.valid?).to be true
      end

      it "return false" do
        user = build(:user, email: 'user', password: '12345678')
        expect(user.valid?).to be false
      end
    end
  end
end
