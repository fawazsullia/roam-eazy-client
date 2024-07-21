export interface IListing {
    title: string;
    isVerified: boolean;
    from: string;
    to: string; // this will be the country
    numberOfNights: number;
    travelInsurance: boolean;
    visaFee?: number;
    hotels?: any[];
    airPortTransfers?: { [key: string]: any };
    isActive: boolean;
    price: number;
}