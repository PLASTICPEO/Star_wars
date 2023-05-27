import axios from "axios";

const axiosParams = {
  baseURL: import.meta.env.VITE_BASE_URL,
};

const httpClient = axios.create(axiosParams);

const api = (httpClient) => {
  return {
    get: (url) => httpClient.get(url),
  };
};

export default api(httpClient);
