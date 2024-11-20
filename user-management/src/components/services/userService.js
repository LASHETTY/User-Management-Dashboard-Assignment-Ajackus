import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const addUser = async (newUser) => {
  const response = await axios.post(BASE_URL, newUser);
  return response.data;
};

export const updateUser = async (updatedUser) => {
  const response = await axios.put(`${BASE_URL}/${updatedUser.id}`, updatedUser);
  return response.data;
};

export const deleteUser = async (userId) => {
  await axios.delete(`${BASE_URL}/${userId}`);
};