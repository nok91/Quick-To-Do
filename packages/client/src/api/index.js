import axios from 'axios';

console.log({ env: process.env });

const API_URL = process.env.REACT_APP_API_URL;

if (!API_URL) {
  throw console.error('API: Environment variable missing!');
}

async function createRoom(name) {
  try {
    const response = await axios.post(`${API_URL}/room`, { title: name });

    return response.data;
  } catch (error) {
    return console.error(error);
  }
}

async function getRoom(id) {
  try {
    const response = await axios.get(`${API_URL}/room/${id}`);
    return response.data;
  } catch (error) {
    return console.error(error);
  }
}

async function updateRoom({ id, ...params }) {
  try {
    const response = await axios.put(`${API_URL}/room/${id}`, params);
    return response.data;
  } catch (error) {
    return console.error(error);
  }
}

async function createTask({ title, room }) {
  try {
    const response = await axios.post(`${API_URL}/task`, { title, room });
    return response.data;
  } catch (error) {
    return console.error(error);
  }
}

async function getTasks(room) {
  try {
    const response = await axios.get(`${API_URL}/task`, { params: { room } });
    return response.data;
  } catch (error) {
    return console.error(error);
  }
}

async function updateTask({ id, ...params }) {
  try {
    const response = await axios.put(`${API_URL}/task/${id}`, params);
    return response.data;
  } catch (error) {
    return console.error(error);
  }
}

export { createRoom, getRoom, updateRoom, getTasks, createTask, updateTask };
