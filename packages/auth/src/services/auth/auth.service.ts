import API from '@api/api';
import { LoginData, LoginResponse, RegisterData } from './auth.dto';

const { error } = console;

export async function login(
  data: LoginData,
): Promise<LoginResponse | undefined> {
  try {
    const res = await API.post<LoginResponse>('/auth/login', data);
    return res.data;
  } catch (err) {
    error(err);
    throw err;
  }
}

export async function register(data: RegisterData) {
  try {
    await API.post('/auth/register', data);
  } catch (err) {
    throw err;
  }
}
