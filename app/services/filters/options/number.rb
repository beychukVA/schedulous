# frozen_string_literal: true

class Filters::Options::Number < Filters::Options::Base
  def perform
    case @filter_item.option
    when "is"
      @people.where({ table => { column => @filter_item.value } })
    when "is_not"
      @people.where.not({ table => { column => @filter_item.value } })
    when "is_greater_than"
      @people.where("#{table}.#{column} > ?", @filter_item.value)
    when "is_less_than"
      @people.where("#{table}.#{column} < ?", @filter_item.value)
    when "is_between"
      @people.where("#{table}.#{column}": @filter_item.value[:from]..@filter_item.value[:to])
    else
      @people
    end
  end
end
