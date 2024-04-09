export type Method = "GET" | "POST" | "PUT" | "DELETE";

export interface ApiRequestParams {
  method: Method;
  url: string;
  data?: any;
  params?: any;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
}
