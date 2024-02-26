import { useApolloClient } from "react-apollo";
import { DocumentNode } from "graphql";

export default function useGraphQLFragment<T>(
  fragment: DocumentNode,
  ...keys: any[]
): T | null {
  try {
    const client = useApolloClient();
    return client.readFragment<T>({
      fragment,
      id: keys.join(""),
      fragmentName: firstFragmentName(fragment),
    });
  } catch (_err) {
    return null;
  }
}

export function firstFragmentName(fragment: any) {
  return fragment.definitions[0].name.value || undefined;
}
