import {Schema, Model, Document, model} from "mongoose";

interface IJob {
  title: string;
  description: string;
}

interface IJobDocument extends IJob, Document {}
interface IJobModel extends Model<IJobDocument> {}

const jobSchema: Schema<IJobDocument> = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Job = model<IJobDocument, IJobModel>("Job", jobSchema);
export default Job;
