# frozen_string_literal: true

# Create the main user and account
unless Rails.env.test?

  account = Account.create!(name: "Main Account")
  user = User.create!(
    email: "admin@example.com",
    password: "password",
    password_confirmation: "password",
    account: account,
    person: Person.new(name: 'Admin User', account: account)
  )
  user.confirm

  MWF = { monday: true, wednesday: true, friday: true, account: account }
  MW = { monday: true, wednesday: true, account: account }
  TTH = { tuesday: true, thursday: true, account: account }

  Program.find_or_create_by(account: account, name: 'Beginner Kickboxing') do |program|
    program.program_timeslots.build(MW.merge(hour: 7, minute: 0, meridiem: 'am'))
    program.program_timeslots.build(TTH.merge(hour: 6, minute: 30, meridiem: 'pm'))

    program.save
  end

  Program.find_or_create_by(account: account, name: 'MMA') do |program|
    program.program_timeslots.build(MW.merge(hour: 7, minute: 0, meridiem: 'am'))
    program.program_timeslots.build(TTH.merge(hour: 6, minute: 30, meridiem: 'pm'))

    program.save
  end

  Program.find_or_create_by(account: account, name: 'Kickboxing Fundamentals') do |program|
    program.program_timeslots.build(MWF.merge(hour: 8, minute: 0, meridiem: 'am'))
    program.program_timeslots.build(MWF.merge(hour: 11, minute: 0, meridiem: 'am'))
    program.program_timeslots.build(TTH.merge(hour: 5, minute: 30, meridiem: 'pm'))

    program.save!
  end

  Program.find_or_create_by(account: account, name: 'Muay Thai Padwork') do |program|
    program.program_timeslots.build(MW.merge(hour: 6, minute: 30, meridiem: 'pm'))

    program.save!
  end

  Program.find_or_create_by(account: account, name: 'Jiu Jitsu - Gi / No Gi') do |program|
    program.program_timeslots.build(MWF.merge(hour: 7, minute: 0, meridiem: 'am'))
    program.program_timeslots.build(MWF.merge(hour: 6, minute: 30, meridiem: 'pm'))

    program.save!
  end
end
