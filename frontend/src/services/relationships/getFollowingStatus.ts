import { FOLLOWING_STATUS_PATH } from '@/common/constants/path';
import { client } from '@/utils/axios';

type ResponseData = {
  is_following: boolean;
};

export const getFollowingStatus = async (
  userId: number
): Promise<ResponseData> => {
  const response = await client.get(FOLLOWING_STATUS_PATH(userId));
  return response.data;
};
