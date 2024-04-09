import axios from "axios";
import { ApiRequestParams, ApiResponse } from "./apiTypes";

const api = axios.create({
  baseURL: "https://run.mocky.io/v3",
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiRequest = async <T = any>({
  method,
  url,
  data = {},
  params = {},
}: ApiRequestParams): Promise<ApiResponse<T>> => {
  try {
    const response = await api.request<T>({ method, url, data, params });
    return {
      data: response.data,
    };
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
};

export default api;
