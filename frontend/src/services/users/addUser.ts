import { ApiContext, User } from '@/@types/data';
import { USERS_API } from '@/common/constants/path';
import { fetcher } from '@/utils/fetchData';

export type UserParams = {
  /**
   * ユーザー名
   */
  name: string;
  /**
   * メールアドレス
   */
  email: string;
  /**
   * パスワード
   */
  password: string;
  /**
   * パスワード確認
   */
  password_confirmation: string;
  /**
   * ユーザー画像
   */
  image?: {
    data: string | ArrayBuffer | null;
    filename: string;
  };
};

/**
 * 認証API（サインイン）
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns ログインユーザー
 */
const signup = async (
  context: ApiContext,
  params: UserParams
): Promise<User | unknown[]> => {
  return fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/${USERS_API}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
};

export default signup;
