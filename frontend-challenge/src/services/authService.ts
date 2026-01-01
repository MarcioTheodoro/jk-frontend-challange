import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
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
