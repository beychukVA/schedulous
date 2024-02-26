# frozen_string_literal: true

class Credits::DistributeService < BaseService
  attr_reader :distribute_time

  def initialize(distribute_time = DateTime.current)
    @distribute_time = distribute_time
  end

  def perform
    people = Person.all

    people.each do |person|
      Credits::CreateService.perform(person, distribute_time)
    end
  end
end
