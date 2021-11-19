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
    console.log("token", res.data.access_token);
  } catch (error) {
    console.error(error);
  }
}

export async function register(data: RegisterData) {
  try {
    const res = await API.post("/auth/register", data);
    console.log(res);
  } catch (error) {
    console.error(error);
  }
}
