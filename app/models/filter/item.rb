# frozen_string_literal: true

class Filter::Item < ApplicationRecord
  acts_as_list

  belongs_to :filter

  BOOLEAN_FILTER_OPTIONS = %w[yes no].freeze
  ARRAY_FILTER_OPTIONS = %w[is is_not in is_not_in].freeze
  STRING_FILTER_OPTIONS = %w[is is_not contains starts_with ends_with is_blank is_not_blank].freeze
  DATE_FILTER_OPTIONS = %w[
    is
    is_not
    is_before
    is_after
    is_between
    is_before_days_ago
    is_after_days_ago
    is_before_weeks_ago
    is_after_weeks_ago
    is_before_months_ago
    is_after_months_ago
    is_before_days_from_now
    is_after_days_from_now
    is_before_weeks_from_now
    is_after_weeks_from_now
    is_before_months_from_now
    is_after_months_from_now
  ].freeze
  NUMBER_FILTER_OPTIONS = %w[is is_not is_less_than is_greater_than is_between].freeze

  OPTIONS_TYPES = {
    "first_name" => {
      table: "people",
      options: STRING_FILTER_OPTIONS,
      service: "Filters::Options::String",
    },
    "last_name" => {
      table: "people",
      options: STRING_FILTER_OPTIONS,
      service: "Filters::Options::String",
    },
    "email" => {
      table: "users",
      options: STRING_FILTER_OPTIONS,
      service: "Filters::Options::String",
    },
    "phone" => {
      table: "users",
      options: STRING_FILTER_OPTIONS,
      service: "Filters::Options::String",
    },
    "created_at" => {
      table: "people",
      options: DATE_FILTER_OPTIONS,
      service: "Filters::Options::Date",

    },
    "classes_reserved_count" => {
      table: "people",
      options: NUMBER_FILTER_OPTIONS,
      service: "Filters::Options::Number",
    },
    "classes_attended_count" => {
      table: "people",
      options: NUMBER_FILTER_OPTIONS,
      service: "Filters::Options::Number",
    },
    "classes_missed_count" => {
      table: "people",
      options: NUMBER_FILTER_OPTIONS,
      service: "Filters::Options::Number",
    },
    "classes_cancelled_count" => {
      table: "people",
      options: NUMBER_FILTER_OPTIONS,
      service: "Filters::Options::Number",
    },
    "last_class_attended_at" => {
      table: "people",
      options: DATE_FILTER_OPTIONS,
      service: "Filters::Options::Date",
    },
    "last_class_missed_at" => {
      table: "people",
      options: DATE_FILTER_OPTIONS,
      service: "Filters::Options::Date",
    },
    "last_class_cancelled_at" => {
      table: "people",
      options: DATE_FILTER_OPTIONS,
      service: "Filters::Options::Date",
    },
    "appointments_reserved_count" => {
      table: "users",
      options: NUMBER_FILTER_OPTIONS,
      service: "Filters::Options::Number",
    },
    "appointments_attended_count" => {
      table: "users",
      options: NUMBER_FILTER_OPTIONS,
      service: "Filters::Options::Number",
    },
    "appointments_missed_count" => {
      table: "users",
      options: NUMBER_FILTER_OPTIONS,
      service: "Filters::Options::Number",
    },
    "appointments_cancelled_count" => {
      table: "users",
      options: NUMBER_FILTER_OPTIONS,
      service: "Filters::Options::Number",
    },
    "appointments_rescheduled_count" => {
      table: "users",
      options: NUMBER_FILTER_OPTIONS,
      service: "Filters::Options::Number",
    },
    "last_appointment_at" => {
      table: "users",
      options: DATE_FILTER_OPTIONS,
      service: "Filters::Options::Date",
    },
    "last_appointment_attended_at" => {
      table: "users",
      options: DATE_FILTER_OPTIONS,
      service: "Filters::Options::Date",
    },
    "last_appointment_cancelled_at" => {
      table: "users",
      options: DATE_FILTER_OPTIONS,
      service: "Filters::Options::Date",
    },
    "last_appointment_missed_at" => {
      table: "users",
      options: DATE_FILTER_OPTIONS,
      service: "Filters::Options::Date",
    },
    "last_message_sent_at" => {
      table: "users",
      options: DATE_FILTER_OPTIONS,
      service: "Filters::Options::Date",
    },
    "last_message_received_at" => {
      table: "users",
      options: DATE_FILTER_OPTIONS,
      service: "Filters::Options::Date",
    },
    "needs_reply" => {
      table: "users",
      options: BOOLEAN_FILTER_OPTIONS,
      service: "Filters::Options::NeedsReply",
    },
    "membership_created_at" => {
      table: "people",
      options: DATE_FILTER_OPTIONS,
      service: "Filters::Options::Date",
    },
    "membership_expires_at" => {
      table: "people",
      options: DATE_FILTER_OPTIONS,
      service: "Filters::Options::Date",
    }
  }

  validates :condition, presence: true, inclusion: { in: %w[and or] }
  validates :filterable, presence: true, inclusion: { in: OPTIONS_TYPES.keys }

  class OptionValidator < ActiveModel::EachValidator
    def validate_each(record, attribute, value)
      if OPTIONS_TYPES[record.filterable][:options].exclude?(value)
        record.errors.add(attribute, "is not a valid option")
      end
    end
  end

  validates :option, presence: true, option: true

  def filter_class
    # "Filters::Options::#{filterable.classify}".constantize
  end

  def service
    OPTIONS_TYPES[filterable][:service].constantize
  end

  def table
    OPTIONS_TYPES[filterable][:table]
  end

  def column
    filterable
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
