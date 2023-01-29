import { User } from '@/@types/data';
import { USERS_PATH } from '@/common/constants/path';
import { client } from '@/utils/axios';

/**
 * ユーザーAPI（一覧取得）
 * NOTE: 頻繁にリフェッチされない場合に用いる
 * @param context APIコンテキスト
 * @returns ユーザー一覧
 */

const getAllUsers = async (): Promise<User[]> => {
  const response = await client.get(USERS_PATH);
  // FIXME: 動作確認を終えたら削除する。
  // axios.defaults.headers.common['X-CSRF-Token'] =
  //   response.headers['X-CSRF-Token'];
  return response.data;
};

export default getAllUsers;
