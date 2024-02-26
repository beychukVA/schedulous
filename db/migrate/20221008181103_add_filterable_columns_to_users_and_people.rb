# frozen_string_literal: true

class AddFilterableColumnsToUsersAndPeople < ActiveRecord::Migration[6.1]
  def change
    add_column :people, :classes_reserved_count, :integer, default: 0
    add_column :people, :classes_attended_count, :integer, default: 0
    add_column :people, :classes_missed_count, :integer, default: 0
    add_column :people, :classes_cancelled_count, :integer, default: 0
    add_column :people, :last_class_attended_at, :datetime
    add_column :people, :last_class_missed_at, :datetime
    add_column :people, :last_class_canceled_at, :datetime

    add_column :users, :appointments_reserved_count, :integer, default: 0
    add_column :users, :appointments_attended_count, :integer, default: 0
    add_column :users, :appointments_missed_count, :integer, default: 0
    add_column :users, :appointments_cancelled_count, :integer, default: 0
    add_column :users, :appointments_rescheduled_count, :integer, default: 0
    add_column :users, :last_appointment_at, :datetime
    add_column :users, :last_appointment_attended_at, :datetime
    add_column :users, :last_appointment_missed_at, :datetime
    add_column :users, :last_appointment_canceled_at, :datetime

    add_column :users, :last_message_sent_at, :datetime
    add_column :users, :last_message_received_at, :datetime
    add_column :users, :membership_created_at, :datetime
    add_column :users, :membership_expires_at, :datetime
  end
end
