# frozen_string_literal: true

class Credits::CreateService < BaseService
  attr_reader :person, :distribute_time

  def initialize(person, distribute_time)
    @person = person
    @distribute_time = distribute_time
  end

  def perform
    # NOTE: no need to distribute credit to person that has unlimited plan
    return if plan.weekly_credit_count.zero?
    return if already_distributed_to?(person)

    person.credits.create(credit_params)
  end

  private

  def plan
    # TODO: Get plan form person, for now we dont have the relation yet
    @plan ||= Plan.first
  end

  def credit_params
    {
      amount: plan.weekly_credit_count,
      distributed_at: distribute_time,
      expiration_at: distribute_time.end_of_week,
    }
  end

  def already_distributed_to?(person)
    person.credits.by_distributed_time(distribute_time).exists?
  end
end
