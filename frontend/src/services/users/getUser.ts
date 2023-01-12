import { User } from '@/@types/data';
import { USER_DETAIL_API } from '@/common/constants/path';
import { ROOT_URL } from '@/common/constants/url';
import axios from '@/utils/axios';

/**
 * ユーザーAPI（一覧取得）
 * @param context APIコンテキスト
 * @returns ユーザー一覧
 */

const getUser = async (userId: number): Promise<User> => {
  const response = await axios.get(`${ROOT_URL}/${USER_DETAIL_API(userId)}`, {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      // 'X-CSRF-Token': 'hogehoge',
    },
  });
  return response.data;
};

export default getUser;
