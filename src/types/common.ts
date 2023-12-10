export interface IMeta {
    limit: number;
    page: number;
    total: number;
}

export interface ApiError {
    status: number;
    data: {
        success: boolean;
        message: string;
        errorMessages: [];
    };
}
