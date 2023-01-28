import { USERS_PATH } from '@/common/constants/path';
import { client } from '@/utils/axios';

export type Args = {
  id: number;
};

export const deleteUser = async ({ id }: Args) => {
  await client.delete(`${USERS_PATH}/${id}`);
  return id;
};
