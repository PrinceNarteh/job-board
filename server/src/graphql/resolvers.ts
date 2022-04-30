import Job, {IJobDocument} from "../models/job.model";

export default {
  Query: {
    jobs: async () => {
      const jobs = await Job.find({});
      return jobs;
    },
  },
  Job: {
    company: (job: IJobDocument) => Job.findById(job.company),
  },
};
