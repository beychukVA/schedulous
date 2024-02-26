# frozen_string_literal: true

require 'rails_helper'

RSpec.describe MessageTemplate, type: :model do
  describe 'validations' do
    it { is_expected.to validate_presence_of(:body) }
  end

  describe 'associations' do
    it { is_expected.to belong_to(:user) }
    it { is_expected.to belong_to(:account).optional }
  end
end

# == Schema Information
#
# Table name: message_templates
#
#  id         :bigint           not null, primary key
#  body       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  account_id :bigint
#  user_id    :bigint
#
# Indexes
#
#  index_message_templates_on_account_id  (account_id)
#  index_message_templates_on_user_id     (user_id)
#
