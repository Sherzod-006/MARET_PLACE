import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';

// REGISTER USER
const register = async (userData) => {
  const response = await axios.post(`${API_URL}register`, userData);
  if (response.data){
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

// LOG IN USER
const login = async (userData) => {
  const response = await axios.post(`${API_URL}login`, userData);
  if (response.data){
      localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

// LOG OUT USER
const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout
};

export default authService;
