export interface IListRequest {
    sortBy: string; 
    filterByCategory?: string; 
    limit?: number; 
    page?: number;
}

export interface IJellyBeansList extends IListRequest {
    filter(predicate: (val: IJellyBean) => boolean): IJellyBean[];
    sweetsList: IJellyBean[];
}

export interface IJellyBean {
    id: string;
    name: string;
    image?: string;
    description: string;
    quantity: number;
    rating: number;
    category: string; // I want to implement
    isFeatured: boolean;
}
