import api from "../api/axios";

export const loginUser = async (email, password) => {
  const response = await api.post("/users/login", {
    email,
    password,
  });

  return response.data;
};

export const registerUser = async (name, email, password) => {
  const response = await api.post("/users/register", {
    name,
    email,
    password,
  });

  return response.data;
};

export const getUser = async (email) => {
  const response = await api.get(`/users/${email}`);

  return response.data;
};
