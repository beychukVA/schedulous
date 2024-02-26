# frozen_string_literal: true

class Filters::Options::String < Filters::Options::Base
  def perform
    case @filter_item.option
    when "is"
      @people.where({ table => { column => @filter_item.value } })
    when "is_not"
      @people.where.not({ table => { column => @filter_item.value } })
    when "contains"
      @people.where("#{table}.#{column} ILIKE ?", "%#{@filter_item.value}%")
    when "does_not_contain"
      @people.where.not("#{table}.#{column} ILIKE ?", "%#{@filter_item.value}%")
    when "starts_with"
      @people.where("#{table}.#{column} ILIKE ?", "#{@filter_item.value}%")
    when "ends_with"
      @people.where("#{table}.#{column} ILIKE ?", "%#{@filter_item.value}")
    else
      @people
    end
  end
end
