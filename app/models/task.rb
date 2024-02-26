# frozen_string_literal: true

class Task < ApplicationRecord
  belongs_to :assignee, class_name: 'User'
  belongs_to :taskable, polymorphic: true, optional: true
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
