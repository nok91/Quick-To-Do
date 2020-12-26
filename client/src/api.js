import axios from 'axios';
const API_URL = 'https://my-to-do-minimal.herokuapp.com';

async function createRoom(name) {
    try {
        const response = await axios.post(`${API_URL}/room`, { title: name});

        return response.data
    } catch (error) {
        console.error(error);
    }
}

async function getRoom(id) {
    try {
        const response = await axios.get(`${API_URL}/room/${id}`);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

async function createTask({ title, room}) {
    try {
        const response = await axios.post(`${API_URL}/task`, { title, room});
        return response.data
    } catch (error) {
        console.error(error);
    }
}

async function getTasks(room) {
    try {
        const response = await axios.get(`${API_URL}/task`, { params: { room } });
        return response.data
    } catch (error) {
        console.error(error);
    }
}

async function updateTask({
    id,
    ...params
}) {
    try {
        const response = await axios.put(`${API_URL}/task/${id}`, params);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export {
    createRoom,
    getRoom,
    getTasks,
    createTask,
    updateTask
}