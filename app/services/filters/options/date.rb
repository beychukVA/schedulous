# frozen_string_literal: true

class Filters::Options::Date < Filters::Options::Base
  def perform
    case @filter_item.option
    when "is"
      @people.where({ table => { column => @filter_item.value } })
    when "is_not"
      @people.where.not({ table => { column => @filter_item.value } })
    when "is_before"
      @people.where("#{table}.#{column} < ?", @filter_item.value)
    when "is_after"
      @people.where("#{table}.#{column} > ?", @filter_item.value)
    when "is_between"
      @people.where("#{table}.#{column}": @filter_item.value[:starts_at]..@filter_item.value[:ends_at])
    when "is_before_days_ago"
      @people.where("#{table}.#{column} < ?", @filter_item.value.days.ago)
    when "is_after_days_ago"
      @people.where("#{table}.#{column} > ?", @filter_item.value.days.ago)
    when "is_before_weeks_ago"
      @people.where("#{table}.#{column} < ?", @filter_item.value.weeks.ago)
    when "is_after_weeks_ago"
      @people.where("#{table}.#{column} > ?", @filter_item.value.weeks.ago)
    when "is_before_months_ago"
      @people.where("#{table}.#{column} < ?", @filter_item.value.months.ago)
    when "is_after_months_ago"
      @people.where("#{table}.#{column} > ?", @filter_item.value.months.ago)
    when "is_before_days_from_now"
      @people.where("#{table}.#{column} < ?", @filter_item.value.days.from_now)
    when "is_after_days_from_now"
      @people.where("#{table}.#{column} > ?", @filter_item.value.days.from_now)
    when "is_before_weeks_from_now"
      @people.where("#{table}.#{column} < ?", @filter_item.value.weeks.from_now)
    when "is_after_weeks_from_now"
      @people.where("#{table}.#{column} > ?", @filter_item.value.weeks.from_now)
    when "is_before_months_from_now"
      @people.where("#{table}.#{column} < ?", @filter_item.value.months.from_now)
    when "is_after_months_from_now"
      @people.where("#{table}.#{column} > ?", @filter_item.value.months.from_now)
    else
      @people
    end
  end
end
