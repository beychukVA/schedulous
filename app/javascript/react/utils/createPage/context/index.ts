import ContextQuery from "./Query";
import { DocumentNode } from "graphql";
import { visit } from "graphql/language/visitor";
import FRAGMENT from "~/hooks/useViewer/Fragment";
import useGraphQLFragment from "~/hooks/useGraphQLFragment";

const [operation, fragments] = ContextQuery.definitions;

export default function addContextToQuery(query: DocumentNode | null) {
  if (!query) {
    return ContextQuery;
  }

  const isContextLoaded = useGraphQLFragment(FRAGMENT, "Viewer");

  if (isContextLoaded) {
    return query;
  }

  // Documentation https://graphql.org/graphql-js/language/#visit
  const newQuery = visit(query, {
    OperationDefinition(node: any) {
      return {
        ...node,
        selectionSet: {
          ...node.selectionSet,
          selections: [
            ...node.selectionSet.selections,
            ...(operation as any).selectionSet.selections,
          ],
        },
      };
    },
  });

  newQuery.definitions = newQuery.definitions.concat(fragments);

  return newQuery;
}
