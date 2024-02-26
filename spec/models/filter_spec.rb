# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Filter, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end

# == Schema Information
#
# Table name: filters
#
#  id             :bigint           not null, primary key
#  encoded_string :string
#  name           :string
#  saved          :boolean          default(FALSE)
#  template       :boolean          default(FALSE)
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  account_id     :bigint
#  user_id        :bigint
#
# Indexes
#
#  index_filters_on_account_id  (account_id)
#  index_filters_on_user_id     (user_id)
#
