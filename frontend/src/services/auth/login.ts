import { ApiContext } from '@/@types/data';
import { LOGIN_PATH } from '@/common/constants/path';
import axios from '@/utils/axios';

export type LoginParams = {
  /**
   * メールアドレス
   */
  email: string;
  /**
   * パスワード
   */
  password: string;
  /**
   * ログイン状態を保持するか
   */
  remember_me: boolean;
};

/**
 * 認証API（サインイン）
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns ログインユーザー
 */
const login = async (
  context: ApiContext,
  params: LoginParams
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => {
  return axios({
    method: 'post',
    url: `${context.apiRootUrl.replace(/\/$/g, '')}/${LOGIN_PATH}`,
    data: params,
    withCredentials: true,
  });
};

export default login;
