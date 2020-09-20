import api from "./apiConfig";

export const register = async (userData) => {
  try {
    const response = await api.post(`/auth/register`, userData);
    await localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (userData) => {
  try {
    const response = await api.post(`/auth/login`, userData);

    await localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const verifyUser = async () => {
  try {
    const response = await api.get(`/auth/verifyUser`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
