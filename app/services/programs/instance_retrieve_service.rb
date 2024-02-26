# frozen_string_literal: true

class Programs::InstanceRetrieveService
  attr_reader :params, :account

  def initialize(params, account)
    @params = params
    @account = account
  end

  def perform
    create_or_destroy_program_instances_in_time_range
    account.program_instances.where(date: [start_date..end_date])
  end

  private

  def create_or_destroy_program_instances_in_time_range
    program_timeslots.each do |program_timeslot|
      start = [start_date, program_timeslot.program.start_date || Date.current].max

      (start..end_date).each do |date|
        dayname = Date::DAYNAMES[date.wday].downcase.to_sym

        program_instance = account.program_instances.find_or_initialize_by(
          date: date,
          program_timeslot: program_timeslot,
          program: program_timeslot.program
        )

        if program_timeslot.send(dayname) && program_instance.new_record?
          program_instance.save
        elsif !program_timeslot.send(dayname) && program_instance.persisted?
          program_instance.destroy
        end
      end
    end
  end

  def program_timeslots
    @program_timeslots ||= account.program_timeslots.where(
      program_id: programs.pluck(:id)
    ).includes(:program)
  end

  def programs
    @programs ||= account.programs.started_in_range(start_date, end_date).or(
      account.programs.where(start_date: nil)
    )
  end

  def start_date
    if params[:start_date].present?
      params[:start_date].to_date rescue Date.current
    else
      Date.current
    end
  end

  def end_date
    if params[:end_date].present?
      params[:end_date].to_date rescue Date.current
    else
      Date.current + 1.month
    end
  end
end
