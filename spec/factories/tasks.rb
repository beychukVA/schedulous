# frozen_string_literal: true

FactoryBot.define do
  factory :task do
    association(:assignee)
    association(:taskable)
    name { "MyString" }
    description { "MyText" }
    completed_at { "2022-09-20 22:12:31" }
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
