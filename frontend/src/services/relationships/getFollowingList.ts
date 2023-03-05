import { FOLLOWING_REQUEST_PATH } from '@/common/constants/path';
import { User } from '@/common/types/data';
import { client } from '@/utils/axios';

type ResponseData = {
  pattern: 'following';
  following_count: number;
  following_list: User[];
};

export const getFollowingList = async (
  userId: number
): Promise<ResponseData> => {
  const response = await client.get(FOLLOWING_REQUEST_PATH(userId));
  return response.data;
};
