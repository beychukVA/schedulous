import gql from "graphql-tag";

export default gql`
  fragment ViewerFragment on Viewer {
    id
    email
    name
    isAdmin
    isTeamMember
    features
    account {
      name
      timeZone
      hasStripe
    }
  }
`;
