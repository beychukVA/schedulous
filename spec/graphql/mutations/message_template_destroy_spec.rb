# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Mutations::MessageTemplateDestroy do
  let(:user) { create(:user) }
  let(:account) { user.account }

  describe '#resolve' do
    it 'destroys a message template' do
      message_template = create(:message_template, user: user, account: account)

      expect {
        execute_mutation(
          current_user: user,
          id: message_template.id
        )
      }.to change(MessageTemplate, :count).by(-1)
    end
  end
end
