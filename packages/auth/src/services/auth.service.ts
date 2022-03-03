import API from '../api/api';

interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  access_token: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

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
    error(err);
  }
}
