export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}
