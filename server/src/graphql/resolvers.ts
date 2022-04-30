import Job from "../models/job.model";

export default {
  Query: {
    jobs: async () => {
      const jobs = await Job.find({});
      return jobs;
    },
  },
};
