export interface IListing {
    "_id": string;
    "listingId": string;
    "title": string;
    "isVerified": boolean;
    "from": string;
    "to": string;
    "includedPlaces": string[];
    "numberOfNights": number;
    "mealsIncluded": string[];
    "travelInsurance": boolean;
    "visa": boolean;
    "hotels":
    {
        "name": string;
        "stars": number;
        "nights": number;
        "city": string;
    }[];
    "airTickets": boolean;
    "tourGuide": boolean;
    "airPortTransfers": string;
    "itinerary":
    {
        "day": number;
        "title": string;
        "description": string[];
    }[];
    "tags": string[];
    "startDate": Date;
    "endDate": Date;
    "createdAt": Date;
    "updatedAt": Date;
    "isActive": boolean;
    "isFeatured": boolean;
    "basePrice": number;
    "variablePrices":
    {
        "window": number;
        "price": number;
    }[]
    "price": number;
    "basePriceSingle": number;
    "priceSingle": number;
    "images": string[];
    description: string;
}