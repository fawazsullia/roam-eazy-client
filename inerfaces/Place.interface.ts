export interface Place {
    placeId: string;
    name: string;
    country: string;
    description?: string;
    type: string;
    images: string[];
    isDeparture: boolean;
    isDestination: boolean;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
}

export interface PlaceWithCount extends Pick<Place, 'placeId' | 'name' | 'images'> {
    count: number;
}