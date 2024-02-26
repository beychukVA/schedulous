# frozen_string_literal: true

FactoryBot.define do
  factory :filter_item, class: 'Filter::Item' do
  end
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
