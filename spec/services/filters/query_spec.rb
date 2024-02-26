# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Filters::Query, type: :service do
  let(:account) { create(:account) }

  context "string match" do
    describe "is" do
      context "#first_name" do
        it "returns people with first_name" do
          filter = create(:filter, account: account)
          create(:person, first_name: "David", account: account)
          create(:filter_item, filterable: "first_name", filter: filter, option: "is", value: "David")

          people = Filters::Query.new(filter).perform

          expect(people.count).to eq(1)
        end
      end

      context "#last_name" do
        it "returns people with last_name" do
          filter = create(:filter, account: account)
          create(:person, last_name: "Smith", account: account)
          create(:filter_item, filterable: "last_name", filter: filter, option: "is", value: "Smith")

          people = Filters::Query.new(filter).perform

          expect(people.count).to eq(1)
        end
      end
    end

    describe "is_not" do
      context "#first_name" do
        it "returns people without first_name" do
          filter = create(:filter, account: account)
          create(:person, first_name: "David", account: account)
          create(:filter_item, filterable: "first_name", filter: filter, option: "is_not", value: "David")

          people = Filters::Query.new(filter).perform

          expect(people.count).to eq(0)
        end
      end
    end

    describe "contains" do
      context "#first_name" do
        it "returns people with first_name containing" do
          filter = create(:filter, account: account)
          create(:person, first_name: "David", account: account)
          create(:filter_item, filterable: "first_name", filter: filter, option: "contains", value: "vid")

          people = Filters::Query.new(filter).perform

          expect(people.count).to eq(1)
        end
      end
    end

    describe "is_not_blank" do
      context "#first_name" do
        it "returns people with not blank first_name" do
          filter = create(:filter, account: account)
          create(:person, first_name: "David", account: account)
          create(:filter_item, filterable: "first_name", filter: filter, option: "is_not_blank")

          people = Filters::Query.new(filter).perform

          expect(people.count).to eq(1)
        end
      end
    end

    describe "starts_with" do
      context "#first_name" do
        it "returns people with first_name starting with" do
          filter = create(:filter, account: account)
          create(:person, first_name: "David", account: account)
          create(:filter_item, filterable: "first_name", filter: filter, option: "starts_with", value: "Da")

          people = Filters::Query.new(filter).perform

          expect(people.count).to eq(1)
        end
      end
    end

    describe "ends_with" do
      context "#first_name" do
        it "returns people with first_name ending with" do
          filter = create(:filter, account: account)
          create(:person, first_name: "David", account: account)
          create(:filter_item, filterable: "first_name", filter: filter, option: "ends_with", value: "id")

          people = Filters::Query.new(filter).perform

          expect(people.count).to eq(1)
        end
      end
    end
  end

  context "number match" do
    # Check appointment_attended_count on "users" with all of the filters
    describe "is" do
      context "#appointments_attended_count" do
        it "returns people with appointments_attended_count" do
          filter = create(:filter, account: account)
          user = create(:user, appointments_attended_count: 1, account: account)
          create(:person, user: user, account: account)
          create(:filter_item, filterable: "appointments_attended_count", filter: filter, option: "is", value: "1")

          people = Filters::Query.new(filter).perform

          expect(people.count).to eq(1)
        end
      end
    end

    describe "is_not" do
      context "#appointments_attended_count" do
        it "returns people without appointments_attended_count" do
          filter = create(:filter, account: account)
          user = create(:user, appointments_attended_count: 1, account: account)
          create(:person, user: user, account: account)
          create(:filter_item, filterable: "appointments_attended_count", filter: filter, option: "is_not", value: "1")

          people = Filters::Query.new(filter).perform

          expect(people.count).to eq(0)
        end
      end
    end

    describe "is_greater_than" do
      context "#appointments_attended_count" do
        it "returns people with appointments_attended_count greater than" do
          filter = create(:filter, account: account)
          user = create(:user, appointments_attended_count: 1, account: account)
          create(:person, user: user, account: account)
          create(:filter_item, filterable: "appointments_attended_count", filter: filter, option: "is_greater_than", value: "0")

          people = Filters::Query.new(filter).perform

          expect(people.count).to eq(1)
        end
      end
    end

    describe "is_less_than" do
      context "#appointments_attended_count" do
        it "returns people with appointments_attended_count less than" do
          filter = create(:filter, account: account)
          user = create(:user, appointments_attended_count: 1, account: account)
          create(:person, user: user, account: account)
          create(:filter_item, filterable: "appointments_attended_count", filter: filter, option: "is_less_than", value: "2")

          people = Filters::Query.new(filter).perform

          expect(people.count).to eq(1)
        end
      end
    end

    describe "is_between" do
      context "#appointments_attended_count" do
        it "returns people with appointments_attended_count between" do
          filter = create(:filter, account: account)
          user = create(:user, appointments_attended_count: 1, account: account)
          create(:person, user: user, account: account)
          create(:filter_item, filterable: "appointments_attended_count", filter: filter, option: "is_between", value: { from: 0, to: 2 })

          people = Filters::Query.new(filter).perform

          expect(people.count).to eq(1)
        end
      end
    end
  end

  context "date match" do
    # Check created_at on "people" with all of the filters
    describe "is" do
      context "#created_at" do
        it "returns people with created_at" do
          filter = create(:filter, account: account)
          create(:person, created_at: Date.today, account: account)
          create(:filter_item, filterable: "created_at", filter: filter, option: "is", value: Date.today)

          people = Filters::Query.new(filter).perform

          expect(people.count).to eq(1)
        end
      end
    end

    describe "is_not" do
      context "#created_at" do
        it "returns people without created_at" do
          filter = create(:filter, account: account)
          create(:person, created_at: Date.today, account: account)
          create(:filter_item, filterable: "created_at", filter: filter, option: "is_not", value: Date.today)

          people = Filters::Query.new(filter).perform

          expect(people.count).to eq(0)
        end
      end
    end

    describe "is_before" do
      context "#created_at" do
        it "returns people with created_at before" do
          filter = create(:filter, account: account)
          create(:person, created_at: Date.today, account: account)
          create(:filter_item, filterable: "created_at", filter: filter, option: "is_before", value: Date.today + 1.day)

          people = Filters::Query.new(filter).perform

          expect(people.count).to eq(1)
        end
      end
    end

    describe "is_after" do
      context "#created_at" do
        it "returns people with created_at after" do
          filter = create(:filter, account: account)
          create(:person, created_at: Date.today, account: account)
          create(:filter_item, filterable: "created_at", filter: filter, option: "is_after", value: Date.today - 1.day)

          people = Filters::Query.new(filter).perform

          expect(people.count).to eq(1)
        end
      end
    end

    describe "is_between" do
      context "#created_at" do
        it "returns people with created_at between" do
          filter = create(:filter, account: account)
          create(:person, created_at: Date.today, account: account)
          create(:filter_item, filterable: "created_at", filter: filter, option: "is_between", value: { from: Date.today - 1.day, to: Date.today + 1.day })

          people = Filters::Query.new(filter).perform

          expect(people.count).to eq(1)
        end
      end
    end
  end
end
