# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Programs::InstanceRetrieveService, type: :service do
  describe "#perform" do
    xit "returns program instances " do
      account = create(:account)
      program = create(:program, start_date: Date.current)
      timeslot = create(:program_timeslot, monday: true,
        tuesday: true, wednesday: true, thursday: true, friday: true,
        saturday: true, sunday: true, program: program
      )

      params = {
        start_date: 1.day.ago,
        end_date: 1.day.from_now,
      }

      programs_retrieve_service = Programs::InstanceRetrieveService.new(params, account)

      program_instances = programs_retrieve_service.perform
      expect(program_instances.count).to eq(2)

      dayname = Date::DAYNAMES[Date.current.wday].downcase.to_sym
      timeslot.update(dayname => false)

      programs_retrieve_service = Programs::InstanceRetrieveService.new(params, account)
      program_instances = programs_retrieve_service.perform
      expect(program_instances.count).to eq(1)
    end
  end
end
