import { User } from '@/@types/data';
import { USERS_API } from '@/common/constants/path';
import { ROOT_URL } from '@/common/constants/url';
import axios from '@/utils/axios';

/**
 * ユーザーAPI（一覧取得）
 * NOTE: 頻繁にリフェッチされない場合に用いる
 * @param context APIコンテキスト
 * @returns ユーザー一覧
 */

const getAllUsers = async (): Promise<User[]> => {
  const response = await axios.get(`${ROOT_URL}/${USERS_API}`, {
    withCredentials: true,
  });
  return response.data;
};

export default getAllUsers;
