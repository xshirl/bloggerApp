import api from "./apiConfig";

export const getPosts = async () => {
  try {
    const response = await api.get("/posts");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPost = async (id) => {
  try {
    const response = await api.get(`/posts/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPostsByUsername = async (username) => {
  try {
    const response = api.get(`/posts/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (payload) => {
  try {
    const response = await api.post("/posts", payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePostById = async (id, payload) => {
  try {
    const response = await api.put(`/posts/${id}`, payload);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePostById = async (id) => {
  try {
    const response = await api.delete(`/posts/${id}`);
  } catch (error) {
    throw error;
  }
};
