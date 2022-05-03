import Job, {IJob} from "../../../models/job.model";

const jobMutations = {
  createJob: async (_parent: any, {jobInput}: {jobInput: IJob}) => {
    const job = await Job.create(jobInput);
    return job;
  },
};

export default jobMutations;
