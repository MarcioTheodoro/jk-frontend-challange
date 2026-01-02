import { api } from './authService';
import type { User } from '../types/User';

export async function getUsers(): Promise<User[]> {
  const response = await api.get<User[]>('/users');
  return response.data;
}

