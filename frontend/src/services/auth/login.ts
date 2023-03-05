import { LOGIN_PATH } from '@/common/constants/path';
import { StatusCode } from '@/common/types';
import { User } from '@/common/types/data';
import { client } from '@/utils/axios';

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
  status: StatusCode;
};

type InvalidResponse = {
  logged_in: boolean;
  status: StatusCode;
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
const login = async (params: LoginParams): Promise<ResponseData> => {
  return client.post(LOGIN_PATH, params);
};

export default login;
