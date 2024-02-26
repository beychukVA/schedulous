# frozen_string_literal: true

class SchedulousSchema < GraphQL::Schema
  mutation(Types::MutationType)
  query(Types::QueryType)

  # For batch-loading (see https://graphql-ruby.org/dataloader/overview.html)
  use GraphQL::Dataloader

  use GraphQL::Batch

  rescue_from ActiveRecord::RecordNotFound do |error|
    raise GraphQL::ExecutionError.new(
      error.message,
    )
  end
end
