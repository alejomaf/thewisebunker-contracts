export interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
}
export interface ApiErrorResponse {
    success: false;
    message: string;
    errors?: Record<string, string[]>;
    statusCode: number;
}
export interface PaginationMeta {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}
export interface PaginatedResponse<T> {
    items: T[];
    meta: PaginationMeta;
}
export interface PaginationQueryDto {
    page?: number;
    limit?: number;
    search?: string;
    sortBy?: string;
    sortOrder?: 'ASC' | 'DESC';
}
export interface UsageStats {
    filesUsed: number;
    filesLimit: number;
    storageUsedMb: number;
    storageLimitMb: number;
    notebooksUsed: number;
    notebooksLimit: number;
    aiTokensUsed: number;
    aiTokenBudget: number;
    flashInputTokens: number;
    flashOutputTokens: number;
    proInputTokens: number;
    proOutputTokens: number;
    hasProAccess: boolean;
}
//# sourceMappingURL=index.d.ts.map