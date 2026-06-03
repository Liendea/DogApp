// backend/src/types/api.types.ts

/** Standard paginated/list API response. */
export interface ListResponse<T> {
  count: number;
  data: T[];
}

/** Standard error response body. */
export interface ErrorResponse {
  error: string;
}

/** Parsed query params for breed search. */
export interface BreedQueryParams {
  search?: string;
  temperament?: string;
  origin?: string;
}
