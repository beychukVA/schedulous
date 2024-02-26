# frozen_string_literal: true

class Filter < ApplicationRecord
  include AccountAsTenant

  belongs_to :user, optional: true
  has_many :filter_items, -> { order(position: :asc) }, dependent: :destroy, class_name: "Filter::Item"

  validates :name, presence: true, if: -> { saved? }

  scope :saved, -> { where(saved: true) }
  scope :unsaved, -> { where(saved: true) }

  def require_tenant?
    !template
  end
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
