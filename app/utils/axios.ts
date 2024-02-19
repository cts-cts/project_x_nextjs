import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  validateStatus(status) {
    return true;
  },

  headers: {
    "api-key": process.env.API_KEY,
  },
});

export default instance;
