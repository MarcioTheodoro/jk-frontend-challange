import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

interface LoginResponse {
  token: string;
}

export async function login(email: string, password: string) {
  const response = await api.post<LoginResponse>(
    '/users/auth/login',
    {
      email,
      password,
    }
  );

  return response.data;
}

export function logout() {
  localStorage.removeItem('token');
}
