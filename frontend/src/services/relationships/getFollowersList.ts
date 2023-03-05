import { FOLLOWERS_REQUEST_PATH } from '@/common/constants/path';
import { User } from '@/common/types/data';
import { client } from '@/utils/axios';

type ResponseData = {
  pattern: 'followers';
  followers_count: number;
  followers_list: User[];
};

export const getFollowersList = async (
  userId: number
): Promise<ResponseData> => {
  const response = await client.get(FOLLOWERS_REQUEST_PATH(userId));
  return response.data;
};
