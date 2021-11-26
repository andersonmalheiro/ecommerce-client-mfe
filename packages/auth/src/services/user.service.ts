import API from "../api/api";

export interface IUserData {
  createdAt: string;
  name: string;
  id: string;
}

export async function getUser(id: number): Promise<IUserData | null> {
  try {
    const res = await API.get<IUserData>(`/customers/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}
