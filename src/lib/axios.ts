import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'expensetrace.onrender.com/api/v1',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;