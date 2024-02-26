import React from "react";
import { useQuery } from "react-apollo";
import { DocumentNode } from "graphql";

interface IProps {
  component: (data: any) => React.ReactNode;
  query: DocumentNode;
  queryVariables: any;
  fetchPolicy?: any;
}

export default function createComponentWithQuery({
  component,
  query,
  queryVariables,
  fetchPolicy
}: IProps) {
  const { loading, error, data } = useQuery(query, {
    variables: queryVariables,
    fetchPolicy: fetchPolicy
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return component(data);
}
