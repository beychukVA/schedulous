# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Mutations::MessageTemplateCreate do
  let(:user) { create(:user) }
  let(:account) { user.account }
  let(:input) do
    {
      body: 'Test body',
    }
  end

  describe '#resolve' do
    it 'creates a message template' do
      result = execute_mutation(
        current_user: user,
        **input
      )

      expect_node(result) do |node|
        expect(node.body).to eq input[:body]
        expect(node.user).to eq user
        expect(node.account).to eq account
      end
    end
  end
end
