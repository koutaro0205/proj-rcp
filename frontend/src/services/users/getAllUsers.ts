import { User, ApiContext } from '@/@types/data';
import { USERS_PATH } from '@/common/constants/path';
import { fetcher } from '@/utils/fetchData';

/**
 * ユーザーAPI（一覧取得）
 * @param context APIコンテキスト
 * @returns ユーザー一覧
 */
const getAllUsers = async (context: ApiContext): Promise<User[]> => {
  // すべのユーザーデータを持った配列を定義
  return fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/${USERS_PATH}`, {
    headers: {
      Origin: '*',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

export default getAllUsers;
