import gql from "graphql-tag";
import ViewerFragment from "~/hooks/useViewer/Fragment";

export default gql`
  query Context {
    viewer {
      ...ViewerFragment
    }
  }
  ${ViewerFragment}
`;
