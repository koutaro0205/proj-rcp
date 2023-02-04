import { User } from '@/@types/data';
import { FOLLOW_USER_PATH } from '@/common/constants/path';
import { client } from '@/utils/axios';

type ResponseData = {
  user: User;
};

export const follow = async (user: User): Promise<ResponseData> => {
  const response = await client.post(FOLLOW_USER_PATH, user);
  return response.data;
};
