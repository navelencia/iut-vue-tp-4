import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function getPosts() {
    const { data } = await axios.get(`${BASE_URL}/posts`);
    return data;
}

async function getPost(id) {
    const { data } = await axios.get(`${BASE_URL}/posts/${id}`);
    return data;
}

async function getUser(id) {
    const { data } = await axios.get(`${BASE_URL}/users/${id}`);
    return data;
}

export { getPosts, getPost, getUser }