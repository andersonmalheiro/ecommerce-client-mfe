import API from "../api/api";

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

export async function login(data: LoginData) {
  try {
    const res = await API.post<LoginResponse>("/auth/login", data);
    return res;
  } catch (error) {
    throw error;
  }
}

export async function register(data: RegisterData) {
  try {
    const res = await API.post("/auth/register", data);
    return res;
  } catch (error) {
    throw error;
  }
}
