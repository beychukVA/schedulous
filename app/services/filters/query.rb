# frozen_string_literal: true

class Filters::Query
  def initialize(filter)
    @filter = filter
  end

  def perform
    filter_items = @filter.filter_items.order(:position)

    people = Person

    people = people.joins(:user) if has_user_search?

    filter_items.each do |filter_item|
      if filter_item.condition == "and"
        people = filter_item.service.new(people, filter_item).perform
      elsif filter_item.condition == "or"
        people = people.or(filter_item.service.new(people, filter_item).perform)
      end
    end

    people
  end

  def has_user_search?
    @filter.filter_items.any? { |filter_item| filter_item.service.new(@people, filter_item).table == "users" }
  end
end
