import {ApolloError} from "apollo-server-express";
import Company, {
  ICompany,
  ICompanyDocument,
} from "../../../models/company.model";

const findCompany = async (companyId: string) => {
  let company = await Company.findById(companyId);
  if (!company) {
    throw new ApolloError(`Company with ID ${companyId} not found`);
  }
  return company;
};

interface ICompanyInput extends ICompany {
  id: string;
}

const companyMutations = {
  createCompany: async (_parent: ICompanyDocument, companyInput: ICompany) => {
    const company = await Company.create(companyInput);
    return company;
  },
  updateCompany: async (
    _parent: ICompanyDocument,
    companyInput: ICompanyInput
  ) => {
    const {id} = companyInput;
    let company = await findCompany(id);

    company = await company.update(companyInput, {new: true});
    return company;
  },
  deleteCompany: async (
    _: ICompanyDocument,
    {companyId}: {companyId: string}
  ) => {
    let company = await findCompany(companyId);
    await company.delete();
    return "Company delete successfully!";
  },
};

export default companyMutations;
