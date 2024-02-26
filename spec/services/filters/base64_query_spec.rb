# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Filters::Base64Query, type: :service do
  let(:json_string) { '[{"condition":"and","filterable":"first_name","operator":"is","value":"John"}]' }
  let(:base64_string) { Base64.encode64(json_string) }
  let(:account) { create(:account) }

  it "returns people witht he name John" do
    create(:person, first_name: "John", account: account)

    people = Filters::Base64Query.new(base64_string).perform

    expect(people.count).to eq(1)
  end
end
