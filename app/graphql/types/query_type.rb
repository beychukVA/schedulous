# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :viewer, Types::ViewerType, null: true

    field :filter, Types::FilterType, resolver: Resolvers::FilterResolver, null: true
    field :filters, [Types::FilterType], null: true

    field :message_templates, resolver: Resolvers::MessageTemplatesResolver, null: true

    field :person, Types::PersonType, resolver: Resolvers::PersonResolver, null: true
    field :people, [Types::PersonType], resolver: Resolvers::PeopleResolver, null: true
    field :people_filter, [Types::PersonType], resolver: Resolvers::PeopleFilterResolver, null: true

    field :plan, Types::PlanType, resolver: Resolvers::PlanResolver, null: true
    field :plans, [Types::PlanType], resolver: Resolvers::PlansResolver, null: true

    field :program, Types::ProgramType, resolver: Resolvers::ProgramResolver, null: true
    field :programs, [Types::ProgramType], resolver: Resolvers::ProgramsResolver, null: true

    field :team_member, Types::TeamMemberType, resolver: Resolvers::TeamMemberResolver, null: true
    field :team_members, [Types::TeamMemberType], resolver: Resolvers::TeamMembersResolver, null: true

    field :program_instances, [Types::ProgramInstanceType], resolver: Resolvers::ProgramInstancesResolver, null: true
    field :accounts_search, [Types::AccountType], resolver: Resolvers::AccountsSearchResolver, null: true

    def viewer
      context[:current_user]
    end

    def filters
      context[:current_account]&.filters
    end
  end
end
