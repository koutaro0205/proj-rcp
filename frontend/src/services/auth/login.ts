import { ApiContext, User } from '@/@types/data';
import { LOGIN_API } from '@/common/constants/path';
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

// レスポンス
type NomalResponse = {
  logged_in: boolean;
  user: User;
};

type AbnormalResponse = {
  logged_in: boolean;
  status: string;
};

type InvalidResponse = {
  logged_in: boolean;
  status: string;
  activated: boolean;
};

export type ResponseData = {
  data: NomalResponse & AbnormalResponse & InvalidResponse;
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
): Promise<ResponseData> => {
  return axios({
    method: 'post',
    url: `${context.apiRootUrl.replace(/\/$/g, '')}/${LOGIN_API}`,
    data: params,
    withCredentials: true,
  });
};

export default login;
