import axios, { AxiosInstance } from "axios";

// OOP: Axios over fetch() because it's compatible with older browser versions.. probably doesn't matter.
const apiClient: AxiosInstance = axios.create({
  baseURL: "https://randomuser.me/api",
  headers: {
    "Content-type": "application/json",
  },
});

export default apiClient;
