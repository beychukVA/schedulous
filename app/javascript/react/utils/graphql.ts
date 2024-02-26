import update from "~/utils/update";
import { ApolloClient } from "apollo-boost";
import { get as lodashGet } from "lodash";

export interface IConnection<T> {
  edges: INode<T>[];
  pageInfo: {
    hasNextPage: boolean;
    endCursor: string | null;
  };
}

interface INode<T> {
  node: T;
}

interface IHasNextPage {
  pageInfo: {
    hasNextPage: boolean;
  };
}

export interface IConnectionPartial<T> {
  edges: INode<T>[];
}

export type IArrayOrConnection<T> = T[] | IConnectionPartial<T>;

export function map<T, R>(
  list: IArrayOrConnection<T>,
  fn: (node: T, i: number) => R
) {
  return Array.isArray(list)
    ? list.map(fn)
    : list.edges.map(({ node }, i) => fn(node, i));
}

export function forEach<T>(
  list: IArrayOrConnection<T>,
  fn: (node: T, i: number) => void
) {
  return Array.isArray(list)
    ? list.forEach(fn)
    : list.edges.forEach(({ node }, i) => fn(node, i));
}

export function toArray<T>(list: IArrayOrConnection<T>): T[] {
  return map(list, (node) => node);
}

export function length(list: IArrayOrConnection<any>) {
  return Array.isArray(list) ? list.length : list.edges.length;
}

export function get<T>(list: IArrayOrConnection<T>, i: number): T | null {
  if (Array.isArray(list)) {
    return list[i] || null;
  }
  return list.edges[i] ? list.edges[i].node : null;
}

export function first<T>(list: IArrayOrConnection<T>): T | null {
  return get(list, 0);
}

export function isEmpty(list: IArrayOrConnection<any>) {
  return length(list) === 0;
}

export function isPresent(list: IArrayOrConnection<any>) {
  return length(list) > 0;
}

export function polymorphicInput(
  name: string,
  subject: { id: string; __typename: string }
) {
  return {
    [`${name}Id`]: subject.id,
    [`${name}Type`]: subject.__typename,
  };
}

export function responseNode(response: any) {
  return response?.data?.response?.node;
}

export function responseErrors(response: any) {
  if (
    !response ||
    !response.data ||
    !response.data.response ||
    !response.data.response.errors ||
    response.data.response.errors.length === 0
  ) {
    return null;
  }

  return response.data.response.errors.reduce((acc: any, error: any) => {
    acc[error.field] = error.message;
    return acc;
  }, {});
}

export function updateQuery({
  cache,
  query,
  variables,
  update: changes,
}: {
  cache: ApolloClient<any>;
  query: any;
  variables?: any;
  update: any;
}) {
  const queryData = cache.readQuery({ query, variables });
  cache.writeQuery({ query, variables, data: update(queryData, changes) });
}

export function updateFragment({
  cache,
  fragment,
  fragmentName,
  id,
  update: changes,
  variables = {},
}: {
  cache: ApolloClient<any>;
  fragment: any;
  fragmentName?: string;
  id: any;
  update: any;
  variables?: any;
}) {
  const fragmentData = cache.readFragment({
    fragment,
    variables,
    fragmentName,
    id,
  });
  cache.writeFragment({
    fragment,
    fragmentName,
    id,
    variables,
    data: update(fragmentData, changes),
  });
}

export function loadMore({
  fetchMore,
  connectionPath,
  cursorName,
  variables,
  endCursor,
}: {
  fetchMore: any;
  connectionPath: string;
  cursorName?: string;
  variables?: any;
  endCursor: string | null;
}) {
  return fetchMore({
    variables: {
      ...(variables || {}),
      [cursorName || "cursor"]: endCursor,
    },
    updateQuery(previousResult: any, { fetchMoreResult }: any) {
      const connection = lodashGet(fetchMoreResult, connectionPath);

      return update.path(previousResult, connectionPath, {
        $mergeConnection: connection,
      });
    },
  });
}

export function hasNextPage(connection: IHasNextPage) {
  return connection.pageInfo.hasNextPage;
}

export function dataIdFromObject(object: { __typename?: string; id?: string }) {
  if (object.__typename === "Viewer") {
    return object.__typename;
  }
  if (object.id && object.__typename) {
    return object.__typename + object.id;
  }
  return "";
}

export function assertNever(x: never): never {
  throw new Error("Unexpected object: " + x);
}
