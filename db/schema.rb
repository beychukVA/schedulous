# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_10_08_181103) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accounts", force: :cascade do |t|
    t.string "name"
    t.string "phone"
    t.string "address"
    t.string "unit"
    t.string "city"
    t.string "state"
    t.string "zip"
    t.string "time_zone"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "total_members"
    t.string "years_in_business"
    t.string "current_software"
    t.string "interest_stage"
    t.string "stripe_id"
    t.string "twillio_account_sid"
    t.string "twillio_auth_token"
  end

  create_table "credits", force: :cascade do |t|
    t.bigint "person_id"
    t.datetime "expiration_at"
    t.integer "amount", default: 0
    t.datetime "distributed_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["person_id"], name: "index_credits_on_person_id"
  end

  create_table "families", force: :cascade do |t|
    t.bigint "account_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["account_id"], name: "index_families_on_account_id"
  end

  create_table "family_members", force: :cascade do |t|
    t.bigint "family_id"
    t.bigint "person_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "account_id"
    t.index ["account_id"], name: "index_family_members_on_account_id"
    t.index ["family_id"], name: "index_family_members_on_family_id"
    t.index ["person_id"], name: "index_family_members_on_person_id"
  end

  create_table "filter_items", force: :cascade do |t|
    t.bigint "filter_id"
    t.integer "position", default: 0
    t.string "condition", default: "and"
    t.string "filterable"
    t.string "option"
    t.jsonb "value"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["filter_id"], name: "index_filter_items_on_filter_id"
  end

  create_table "filters", force: :cascade do |t|
    t.string "encoded_string"
    t.string "name"
    t.bigint "account_id"
    t.bigint "user_id"
    t.boolean "template", default: false
    t.boolean "saved", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["account_id"], name: "index_filters_on_account_id"
    t.index ["user_id"], name: "index_filters_on_user_id"
  end

  create_table "flipper_features", force: :cascade do |t|
    t.string "key", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["key"], name: "index_flipper_features_on_key", unique: true
  end

  create_table "flipper_gates", force: :cascade do |t|
    t.string "feature_key", null: false
    t.string "key", null: false
    t.string "value"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["feature_key", "key", "value"], name: "index_flipper_gates_on_feature_key_and_key_and_value", unique: true
  end

  create_table "message_templates", force: :cascade do |t|
    t.bigint "account_id"
    t.bigint "user_id"
    t.string "body"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["account_id"], name: "index_message_templates_on_account_id"
    t.index ["user_id"], name: "index_message_templates_on_user_id"
  end

  create_table "people", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "avatar"
    t.bigint "account_id"
    t.date "dob"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "classes_reserved_count", default: 0
    t.integer "classes_attended_count", default: 0
    t.integer "classes_missed_count", default: 0
    t.integer "classes_cancelled_count", default: 0
    t.datetime "last_class_attended_at"
    t.datetime "last_class_missed_at"
    t.datetime "last_class_canceled_at"
    t.index ["account_id"], name: "index_people_on_account_id"
  end

  create_table "plans", force: :cascade do |t|
    t.bigint "account_id"
    t.string "name", null: false
    t.string "description"
    t.string "stripe_id", null: false
    t.decimal "amount", precision: 8, scale: 2, default: "0.0", null: false
    t.integer "interval", default: 1, null: false
    t.integer "interval_type", default: 0, null: false
    t.datetime "trashed_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "onetime", default: false, null: false
    t.decimal "initial_amount", precision: 8, scale: 2, default: "0.0", null: false
    t.integer "plan_duration", default: 0, null: false
    t.integer "plan_duration_type", default: 0, null: false
    t.integer "weekly_credit_count", default: 0
    t.index ["account_id"], name: "index_plans_on_account_id"
  end

  create_table "program_instances", force: :cascade do |t|
    t.date "date"
    t.bigint "program_id"
    t.bigint "program_timeslot_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "account_id"
    t.integer "program_reservations_count", default: 0
    t.index ["account_id"], name: "index_program_instances_on_account_id"
    t.index ["program_id"], name: "index_program_instances_on_program_id"
    t.index ["program_timeslot_id"], name: "index_program_instances_on_program_timeslot_id"
  end

  create_table "program_reservations", force: :cascade do |t|
    t.bigint "person_id"
    t.bigint "program_instance_id"
    t.boolean "attend", default: false
    t.datetime "canceled_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["person_id"], name: "index_program_reservations_on_person_id"
    t.index ["program_instance_id"], name: "index_program_reservations_on_program_instance_id"
  end

  create_table "program_timeslots", force: :cascade do |t|
    t.boolean "monday"
    t.boolean "tuesday"
    t.boolean "wednesday"
    t.boolean "thursday"
    t.boolean "friday"
    t.boolean "saturday"
    t.boolean "sunday"
    t.integer "hour"
    t.integer "minute"
    t.string "meridiem"
    t.bigint "program_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "account_id"
    t.index ["account_id"], name: "index_program_timeslots_on_account_id"
    t.index ["program_id"], name: "index_program_timeslots_on_program_id"
  end

  create_table "programs", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.integer "capacity"
    t.date "start_date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "image"
    t.bigint "account_id"
    t.integer "duration", default: 60
    t.index ["account_id"], name: "index_programs_on_account_id"
  end

  create_table "tasks", force: :cascade do |t|
    t.bigint "assignee_id"
    t.string "name"
    t.text "description"
    t.datetime "completed_at"
    t.string "taskable_type"
    t.bigint "taskable_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["assignee_id"], name: "index_tasks_on_assignee_id"
    t.index ["taskable_type", "taskable_id"], name: "index_tasks_on_taskable"
  end

  create_table "team_members", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "account_id"
    t.integer "role", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["account_id"], name: "index_team_members_on_account_id"
    t.index ["user_id"], name: "index_team_members_on_user_id"
  end

  create_table "used_credits", force: :cascade do |t|
    t.integer "amount"
    t.date "date"
    t.bigint "program_reservation_id"
    t.bigint "person_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["person_id"], name: "index_used_credits_on_person_id"
    t.index ["program_reservation_id"], name: "index_used_credits_on_program_reservation_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "phone"
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.bigint "person_id"
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "account_id"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.integer "appointments_reserved_count", default: 0
    t.integer "appointments_attended_count", default: 0
    t.integer "appointments_missed_count", default: 0
    t.integer "appointments_cancelled_count", default: 0
    t.integer "appointments_rescheduled_count", default: 0
    t.datetime "last_appointment_at"
    t.datetime "last_appointment_attended_at"
    t.datetime "last_appointment_missed_at"
    t.datetime "last_appointment_canceled_at"
    t.datetime "last_message_sent_at"
    t.datetime "last_message_received_at"
    t.datetime "membership_created_at"
    t.datetime "membership_expires_at"
    t.index ["account_id"], name: "index_users_on_account_id"
    t.index ["email", "account_id"], name: "index_users_on_email_and_account_id", unique: true
    t.index ["person_id"], name: "index_users_on_person_id"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
