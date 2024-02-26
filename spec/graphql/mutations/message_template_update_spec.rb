# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Mutations::MessageTemplateUpdate do
  let(:user) { create(:user) }
  let(:account) { user.account }
  let(:message_template) { create(:message_template, user: user, account: account) }
  let(:input) do
    {
      id: message_template.id,
      body: 'Updated body',
    }
  end

  describe '#resolve' do
    it 'updates a message template' do
      result = execute_mutation(
        current_user: user,
        id: message_template.id,
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
