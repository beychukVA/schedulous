# frozen_string_literal: true

class Filters::Base64Query
  def initialize(string)
    @string = string
    @json = Base64.decode64(string)

    cleanup_old_filters
  end

  def perform
    filter = Filter.find_or_initialize_by(encoded_string: @string)

    return filter if filter.persisted?

    filter.save

    JSON.parse(@json).map do |filter_item|
      filter.filter_items.create(
        condition: filter_item["condition"],
        filterable: filter_item["filterable"],
        option: filter_item["operator"],
        value: filter_item["value"]
      )
    end

    Filters::Query.new(filter).perform
  end

  def cleanup_old_filters
    Filter.unsaved.where("created_at < ?", 1.week.ago).destroy_all
  end
end
