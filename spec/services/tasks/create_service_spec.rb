# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Tasks::CreateService, type: :service do
  describe "#perform" do
    context "with valid data" do
      it "creates a new task" do
        params = attributes_for(:task)
        task_service = Tasks::CreateService.new(params)
        task = task_service.perform
        expect(task).to be_present
      end
    end

    context "with invalid data" do
      it "returns errors" do
        params = attributes_for(:task, assignee: nil, taskable_id: nil, taskable_type: nil)
        task_service = Tasks::CreateService.new(params)
        task = task_service.perform
        expect(task.errors).to be_present
      end
    end
  end
end
