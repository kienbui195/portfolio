import axios from "axios";

const apis = {
  get: async (url: string, query?: string) => {
    try {
      return await axios.get(`${process.env.REACT_APP_API_URL}/${url}${query ? `?${query}` : ""}`);
    } catch (err: any) {
      throw err;
    }
  },

  getOne: async (url: string, id: number, query?: string) => {
    try {
      return await axios.get(`${process.env.REACT_APP_API_URL}/${url}/${id}${query ? `?${query}` : ""}`);
    } catch (err: any) {
      throw err;
    }
  },
};

export default apis;
