import {jobMutations, jobQueries, jobResolver} from "./jobs";

const resolvers = {
  Query: {
    ...jobQueries,
  },
  Job: jobResolver,
  Mutation: {
    ...jobMutations,
  },
};

export default resolvers;
