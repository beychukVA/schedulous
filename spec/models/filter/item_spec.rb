# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Filter::Item, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end

# == Schema Information
#
# Table name: filter_items
#
#  id         :bigint           not null, primary key
#  condition  :string           default("and")
#  filterable :string
#  option     :string
#  position   :integer          default(0)
#  value      :jsonb
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  filter_id  :bigint
#
# Indexes
#
#  index_filter_items_on_filter_id  (filter_id)
#
