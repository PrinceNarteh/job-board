import {gql} from "@apollo/client";

export const GET_JOBS = gql`
  query getJob {
    jobs {
      id
      title
      description
    }
  }
`;
