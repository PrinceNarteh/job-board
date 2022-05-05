import {gql} from "@apollo/client";

export const GET_JOBS = gql`
  query GetJobs {
    jobs {
      id
      title
      description
      company {
        name
      }
    }
  }
`;

export const GET_JOB = gql`
  query GetJob($jobId: ID!) {
    job(jobId: "6271b4cd19835f25f47e3376") {
      id
      title
      description
    }
  }
`;
