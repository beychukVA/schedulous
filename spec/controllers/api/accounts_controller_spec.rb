# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::AccountsController, type: :request do
  before(:each) do
    login_user
  end

  let(:headers) { { "ACCEPT" => "application/json" } }

  describe '#update' do
    describe "with valid params" do
      it "updates account" do
        account_params = attributes_for(:account, name: 'Admin account', twillio_account_sid: '12345678', twillio_auth_token: '123456789')
        patch api_account_url, params: { account: account_params }, headers: headers

        expect(response.status).to eq(200)
        parsed_response = JSON.parse(response.body)
        expect(parsed_response['name']).to eq('Admin account')
        expect(parsed_response['twillio_account_sid']).to eq('12345678')
        expect(parsed_response['twillio_auth_token']).to eq('123456789')
      end
    end

    describe "with invalid params" do
      it "returns errors" do
        account_params = attributes_for(:account, name: '')
        patch api_account_url, params: { account: account_params }, headers: headers

        expect(response.status).to eq(422)
        parsed_response = JSON.parse(response.body)
        expect(parsed_response['errors']).to be_present
      end
    end
  end
end
