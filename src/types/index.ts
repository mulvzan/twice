export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';