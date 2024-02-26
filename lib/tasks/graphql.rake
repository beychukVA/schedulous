# frozen_string_literal: true

namespace :graphql do
  task export_schema: [:environment] do
    schema = SchedulousSchema.execute(GraphQL::Introspection::INTROSPECTION_QUERY, variables: {}, context: {})

    File.write(Rails.root.join('app', 'javascript', 'react', 'graphqlSchema.json'), JSON.pretty_generate(schema))
  end

  task fragment_types: [:environment] do
    query = '{__schema {types { kind name possibleTypes { name } } } }'

    fragments_matcher = SchedulousSchema.execute(query, variables: nil, context: nil)

    data = fragments_matcher['data']['__schema']['types'].compact

    result = data.select { |fragment| fragment['possibleTypes'].present? }

    File.write(Rails.root.join('app', 'javascript', 'react', 'graphqlFragmentTypes.json'), JSON.pretty_generate("__schema": { "types": result }))
  end
end
