# frozen_string_literal: true

class Tasks::CreateService
  attr_reader :params

  def initialize(params)
    @params = params
  end

  def perform
    task = Task.new(params)
    if task.save
      task
    else
      task.errors
    end
  end
end
