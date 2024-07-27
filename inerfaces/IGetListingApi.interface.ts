export interface IGetListingApi {
    offset: number;
    limit: number;
    from?: string;
    to?: string;
    listingType?: 'active' | 'inactive' | 'all';
    startDate: Date;
    endDate: Date;
    isFeatured?: boolean;
    budgetMin?: number;
    budgetMax?: number;
    isFlightIncluded?: boolean;
    maxNights?: number;
    minNights?: number;
    sortKey?: string;
    sortOrder?: number;
}