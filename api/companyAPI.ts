import type {CompanyType} from "~/types/CompanyType";

export const createCompanyAPI = async (companyInfo: CompanyType): Promise<CompanyType> => {
    try {
        return await $fetch<CompanyType>("http://localhost:8080/api/v1/company/create-company", {
            method: "POST",
            body: {companyInfo},
        });
    } catch (error) {
        console.error("Create company: ", error);
        throw error;
    }
}
