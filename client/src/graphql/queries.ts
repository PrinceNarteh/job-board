import {gql} from "@apollo/client";

export const GET_JOBS = gql`
  query getJobs {
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
  query getJob($jobId: ID) {
    job(jobId: $jobId) {
      id
      title
      description
    }
  }
`;
