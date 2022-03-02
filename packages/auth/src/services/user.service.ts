import API from '../api/api';

export interface IUserData {
  createdAt: string;
  name: string;
  id: string;
}

const { error } = console;

export async function getUser(id: number): Promise<IUserData | undefined> {
  try {
    const res = await API.get<IUserData>(`/users/${id}`);
    return res.data;
  } catch (err) {
    error(err);
  }
}
