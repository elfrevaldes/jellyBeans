export interface IListRequest {
    sortBy?: string; 
    filterByCategory?: string; 
    limit?: number; 
    page?: number;
}

export interface IJellyBeansList extends IListRequest {
    sweetsList: IJellyBean[];
}

export interface IJellyBean {
    id: number;
    name: string;
    description: string;
    quantity: number;
    rating: number;
    category: string; // I want to implement
    isFeatured: boolean;
}
