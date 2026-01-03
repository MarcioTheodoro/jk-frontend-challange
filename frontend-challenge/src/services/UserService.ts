import { api } from './authService';
import type { User } from '../types/User';

export async function getUsers(): Promise<User[]> {
  const response = await api.get<User[]>('/users');
  return response.data;
}

interface CreateUserPayload {
  email: string;
  password: string;
  type: string;
  name?: string;
  cpf?: string;
  birthDate?: Date;
  fantasyName?: string;
}

export async function createUser(data: CreateUserPayload) {
  await api.post('/users', data);
}

