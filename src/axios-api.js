import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://cognitronauts.onrender.com/',
});

export default instance;
