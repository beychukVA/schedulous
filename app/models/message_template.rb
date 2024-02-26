# frozen_string_literal: true

class MessageTemplate < ApplicationRecord
  include AccountAsTenant

  belongs_to :user
  validates :body, presence: true
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
