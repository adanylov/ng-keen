export interface Listing {
    id: number;
    advisorId: number;
    salespitch: string;
    speakerName: string;
    name: string;
    listingTitle: string;
    serviceRate: string;
    serviceRateAmount: number;
    starRating: number;
    averageRating: number;
    pictureURL: string;
    picture: any;
    ratingCount: number;
    points: number;
    description?: string;
    categoryId: number;
    categoryName?: string;
    featuredCategoryId: number;
    lastContacted: string;
    isFavorite: boolean;
    offerPrice: any;
    availability: number;
    chatAvailability: number;
    isChatEnabled: boolean;
}