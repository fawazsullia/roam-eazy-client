export interface ICompany {
    _id: string;
    name: string;
    isVerified: boolean;
    plan: string;
    createdAt: Date;
    updatedAt: Date;
}


export interface ICompanyDetail {
    _id: string;
    description: string;
    logo?: string;
    address: string;
    email: string;
    alternateEmail?: string;
    phone: string;
    alternatePhone?: string;
    companyId: string;
    createdAt: Date;
    tradeLicense: string;
    updatedAt: Date;
}