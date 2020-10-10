export interface ApiResponse<T> {
    success: boolean;
    rows: T;
    reason?: string;
}
