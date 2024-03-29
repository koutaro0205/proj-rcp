import { USERS_PATH } from '@/common/constants/path';
import { User } from '@/common/types/data';
import { client } from '@/utils/axios';

/**
 * ユーザーAPI（一覧取得）
 * NOTE: 頻繁にリフェッチされない場合に用いる
 * @param context APIコンテキスト
 * @returns ユーザー一覧
 */

const getAllUsers = async (): Promise<User[]> => {
  const response = await client.get(USERS_PATH);
  return response.data;
};

export default getAllUsers;
