# frozen_string_literal: true

class GraphqlController < ApplicationController
  include Security::CsrfStateless
  include Graph::ControllerMethods

  set_current_tenant_through_filter
  before_action :set_tenant

  def execute
    context = {
      current_user: current_user,
      current_account: current_user&.account,
      request: request,
      cookies: cookies,
      session: session,
      controller: self
    }

    render json: SchedulousSchema.execute(query, variables: variables, context: context)
  end

  def current_account
    current_user&.account
  end

  def set_tenant
    set_current_tenant(current_account)
  end
end
