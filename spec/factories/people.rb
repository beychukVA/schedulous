# frozen_string_literal: true

# == Schema Information
#
# Table name: people
#
#  id                      :bigint           not null, primary key
#  avatar                  :string
#  classes_attended_count  :integer          default(0)
#  classes_cancelled_count :integer          default(0)
#  classes_missed_count    :integer          default(0)
#  classes_reserved_count  :integer          default(0)
#  dob                     :date
#  first_name              :string
#  last_class_attended_at  :datetime
#  last_class_canceled_at  :datetime
#  last_class_missed_at    :datetime
#  last_name               :string
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#  account_id              :bigint
#
# Indexes
#
#  index_people_on_account_id  (account_id)
#
FactoryBot.define do
  factory :person do
    first_name { "First Name" }
    last_name { "Last Name" }
    dob { 18.years.ago.to_date }
    association(:account)

    after(:build) do |instance|
      if instance.family_id.blank?
        family = create(:family)
        instance.family_id = family.id
      end
      instance.credits.build(
        amount: 3,
        distributed_at: Time.current.beginning_of_week,
        expiration_at: Time.current.end_of_week
      )
    end
  end
end
