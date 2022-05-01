import Company, {ICompanyDocument} from "../../../models/company.model";

const companyQueries = {
  companies: async () => await Company.find({}),
  company: async (_: ICompanyDocument, {companyId}: {companyId: string}) =>
    await Company.findById(companyId),
};

export default companyQueries;
