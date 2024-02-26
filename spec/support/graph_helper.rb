# frozen_string_literal: true

module GraphHelper
  def execute_mutation(current_user: nil, context: {}, **inputs)
    context = context.merge(current_user: current_user)

   described_class.new(object: nil, context: context, field: nil).resolve(inputs)
  end

  def expect_node(result, value = :dont_care)
    expect(result[:errors]).to be_empty

    if value == :dont_care
      expect(result[:node]).not_to eq nil
    else
      expect(result[:node]).to eq value
    end

    yield result[:node] if block_given?
  end
end
