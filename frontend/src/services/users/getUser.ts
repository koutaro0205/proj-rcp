import { USER_DETAIL_PATH } from '@/common/constants/path';
import { UserProfile } from '@/common/types/data';
import { client } from '@/utils/axios';

/**
 * ユーザーAPI
 * @returns ユーザー
 */

const getUser = async (userId: number): Promise<UserProfile> => {
  const response = await client.get(USER_DETAIL_PATH(userId));
  return response.data;
};

export default getUser;
