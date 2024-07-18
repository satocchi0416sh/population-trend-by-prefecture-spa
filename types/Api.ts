export interface ErrorResponse {
    message: string;
    statusCode: number;
    error?: string;
    errors?: string[];
}