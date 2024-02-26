# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Mutations::UserCreate do
  let(:input) do
    {
      name: 'Test User',
      email: 'test@test.com',
      password: 'password',
      account_name: 'Test Account'
    }
  end

  describe '#resolve' do
    xit 'creates a user' do
      result = execute_mutation(input)

      expect_node(result) do |node|
        expect(node.person.name).to eq input[:name]
        expect(node.account.name).to eq input[:account_name]
        expect(node.email).to eq input[:email]
      end
    end
  end
end
