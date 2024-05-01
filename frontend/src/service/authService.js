import axios from "axios";
import { LOGIN_API } from "../config/apiRoutes";
import { REGISTER_API } from "../config/apiRoutes";

export const login = async (credentials) => {
  try {
    const response = await axios.post(LOGIN_API, credentials);
    return response.data.token;
  } catch (error) {
    throw error.response.data;
  }
};

export const register = async (userData) => {
  try {
    const response = await axios.post(REGISTER_API, userData);
    return response.data.token;
  } catch (error) {
    throw error.response.data;
  }
};
