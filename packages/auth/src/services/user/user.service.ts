import API from '../../api/api';
import { UpdateUser, User } from './user.dto';

const { error } = console;

export async function getUser(id: number): Promise<User | undefined> {
  try {
    const res = await API.get<User>(`/user/${id}`);
    return res.data;
  } catch (err) {
    error(err);
  }
}

export async function updateUser(
  id: number,
  data: UpdateUser,
): Promise<User | undefined> {
  try {
    const res = await API.patch<User>(`/user/${id}`, data);
    return res.data;
  } catch (err) {
    error(err);
  }
}
