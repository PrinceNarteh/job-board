import {Schema, model, Document, Model} from "mongoose";

export interface ICompany {
  name: string;
  description: string;
}

export interface ICompanyDocument extends ICompany, Document {}
interface ICompanyModel extends Model<ICompanyDocument> {}

const companySchema: Schema<ICompanyDocument> = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Company = model<ICompanyDocument, ICompanyModel>(
  "Company",
  companySchema
);
export default Company;
