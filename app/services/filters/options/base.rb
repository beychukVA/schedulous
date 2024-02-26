# frozen_string_literal: true

class Filters::Options::Base
  def initialize(people, filter_item)
    @people = people
    @filter_item = filter_item
  end

  delegate :table, :column, to: :@filter_item
end
