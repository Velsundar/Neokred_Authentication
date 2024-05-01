import axios from "axios";
import { PROFILE_API } from "../config/apiRoutes";

export const getProfile = async (token) => {
  try {
    const response = await axios.get(PROFILE_API, {
      headers: { Authorization: `${token}` },
    });
    return response.data.user;
  } catch (error) {
    throw error.response.data;
  }
};
