# frozen_string_literal: true

class Api::AccountsController < ApiController
  def update
    @account = current_account

    if @account.update(account_params)
      render :show
    else
      render json: { errors: @account.errors }, status: :unprocessable_entity
    end
  end

  private

  def account_params
    params.require(:account).permit(:name, :twillio_account_sid, :twillio_auth_token)
  end
end
