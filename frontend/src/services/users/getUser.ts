import { USER_DETAIL_PATH } from '@/common/constants/path';
import { User } from '@/common/types/data';
import { client } from '@/utils/axios';

/**
 * ユーザーAPI（一覧取得）
 * @param context APIコンテキスト
 * @returns ユーザー一覧
 */

const getUser = async (userId: number): Promise<User> => {
  const response = await client.get(USER_DETAIL_PATH(userId));
  // axios.defaults.headers.common['X-CSRF-Token'] =
  //   response.headers['X-CSRF-Token'];
  return response.data;
};

export default getUser;
