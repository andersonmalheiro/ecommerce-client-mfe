import axios from 'axios';
import { Cookies } from 'react-cookie';

const API = axios.create({
  baseURL: 'http://localhost:8080/api',
});

API.interceptors.request.use((config) => {
  const newConfig = { ...config };
  const cookies = new Cookies();

  if (newConfig.headers) {
    newConfig.headers.Authorization = `Bearer ${cookies.get('auth')}`;
  }

  return newConfig;
});

export default API;
