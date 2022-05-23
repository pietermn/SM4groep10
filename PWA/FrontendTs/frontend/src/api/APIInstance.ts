import axios from 'axios'

const instance = axios.create({
    baseURL: "https://localhost:5200/"
});

export default instance;