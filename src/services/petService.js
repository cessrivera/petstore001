import axios from 'axios';

const API_URL = 'http://localhost:8080/rivera/pets';

export const getPets = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addPet = async (pet) => {
  await axios.post(API_URL, pet);
};

export const deletePet = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

export const updatePet = async (pet) => {
  await axios.put(`${API_URL}/${pet.id}`, pet);
};
