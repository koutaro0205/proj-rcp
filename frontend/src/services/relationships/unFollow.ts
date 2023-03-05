import { FOLLOW_USER_PATH } from '@/common/constants/path';
import { User } from '@/common/types/data';
import { client } from '@/utils/axios';

type ResponseData = {
  user: User;
};

export const unFollow = async (userId: number): Promise<ResponseData> => {
  const response = await client.delete(`${FOLLOW_USER_PATH}/${userId}`);
  return response.data;
};
