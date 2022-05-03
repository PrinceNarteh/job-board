import {Schema, Model, Document, model} from "mongoose";
import {ICompanyDocument} from "./company.model";

export interface IJob {
  title: string;
  description: string;
  company: ICompanyDocument;
}

export interface IJobDocument extends IJob, Document {}
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
  company: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

const Job = model<IJobDocument, IJobModel>("Job", jobSchema);
export default Job;
