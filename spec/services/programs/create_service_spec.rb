# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Programs::CreateService, type: :service do
  describe "#perform" do
    let(:person) { create(:person) }
    let(:credit) { create(:credit, amount: 3, person: person) }
    let(:program) { create(:program, capacity: 5) }

    context '#Check credit' do
      it "returns program reservation with reservation date in current week" do
        credit
        program_instance = create(:program_instance, program: program, date: Date.current)

        params = attributes_for(:program_reservation).merge(
          person_id: person.id,
          program_instance_id: program_instance.id
        )
        program_reservation_service = Programs::CreateService.new(
          params
        )
        program_reservation = program_reservation_service.perform

        expect(program_reservation.id).not_to be nil
        expect(program_reservation.person_id).to eq(person.id)
        expect(program_reservation.program_instance_id).to eq(program_instance.id)
      end

      it "returns program reservation with reservation date greater than current week" do
        create(:plan)
        program_instance = create(:program_instance, program: program, date: Date.current + 10.days)

        params = attributes_for(:program_reservation).merge(
          person_id: person.id,
          program_instance_id: program_instance.id
        )
        program_reservation_service = Programs::CreateService.new(
          params
        )
        program_reservation = program_reservation_service.perform

        expect(program_instance.id).not_to be nil
        expect(program_reservation.person_id).to eq(person.id)
        expect(program_reservation.program_instance_id).to eq(program_instance.id)
      end
    end

    it "returns errors when program is full" do
      person = create(:person)
      program = create(:program, capacity: 2)
      program_instance = create(:program_instance, program: program)
      create(:program_reservation, program_instance: program_instance, person: person)
      create(:program_reservation, program_instance: program_instance, person: person)

      params = attributes_for(:program_reservation).merge(
        person_id: person.id,
        program_instance_id: program_instance.id
      )
      program_reservation_service = Programs::CreateService.new(
        params
      )
      program_reservation = program_reservation_service.perform

      expect(program_reservation.errors).to be_present
    end
  end
end
