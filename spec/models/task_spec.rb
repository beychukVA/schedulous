# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Task, type: :model do
  describe "sane factory" do
    describe "Associations" do
      it { should belong_to(:assignee) }
      it { should belong_to(:taskable).optional }
    end
  end
end

# == Schema Information
#
# Table name: tasks
#
#  id            :bigint           not null, primary key
#  completed_at  :datetime
#  description   :text
#  name          :string
#  taskable_type :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  assignee_id   :bigint
#  taskable_id   :bigint
#
# Indexes
#
#  index_tasks_on_assignee_id  (assignee_id)
#  index_tasks_on_taskable     (taskable_type,taskable_id)
#
