# frozen_string_literal: true

module Users
  class CreateService < BaseService
    def initialize(params)
      @params = params
    end

    def perform
      account = if @params[:account_id]
        Account.find(@params[:account_id])
      else
        Account.new(name: @params[:account_name])
      end

      person = Person.new(name: @params[:name], account: account)

      user = User.create(
        email: @params[:email],
        password: @params[:password],
        account: account,
        person: person
      )

      user
    end
  end
end
