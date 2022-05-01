import Company from "../../../models/company.model";
import Job, {IJobDocument} from "../../../models/job.model";

const jobQueries = {
  jobs: async () => {
    const jobs = await Job.find({});
    return jobs;
  },
  job: async (_: IJobDocument, {jobId}: {jobId: string}) => {
    const job = await Job.findById(jobId);
    return job;
  },
};

export const jobResolver = {
  company: async (job: IJobDocument) => await Company.findById(job.company),
};

export default jobQueries;
