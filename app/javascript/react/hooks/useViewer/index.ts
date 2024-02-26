import FRAGMENT from "./Fragment.ts";
import useGraphQLFragment from "~/hooks/useGraphQLFragment";

export default function useViewer() {
  return (
    useGraphQLFragment(FRAGMENT, "Viewer") || {
      __typename: "Viewer",
      id: null,
    }
  );
}
