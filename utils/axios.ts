import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://assignments.reaktor.com/birdnest',
});

export default instance;