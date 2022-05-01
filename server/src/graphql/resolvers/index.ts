import {jobMutations, jobQueries, jobResolver} from "./jobs";
import {companyMutations, companyQueries} from "./company";

const resolvers = {
  Job: jobResolver,
  Query: {
    ...companyQueries,
    ...jobQueries,
  },
  Mutation: {
    ...companyMutations,
    ...jobMutations,
  },
};

export default resolvers;
