import { LOGGEDIN_USER_REQUEST_PATH } from '@/common/constants/path';
import { User } from '@/common/types/data';
import { client } from '@/utils/axios';

/**
 * ユーザーAPI
 * @returns ユーザー
 */

type ResponseData = {
  logged_in: boolean;
  user: User;
};

const getCurrentUser = async (): Promise<ResponseData> => {
  const response = await client.get(LOGGEDIN_USER_REQUEST_PATH);
  return response.data;
};

export default getCurrentUser;
