import { User } from '@/@types/data';
import { LOGIN_API } from '@/common/constants/path';
import { ROOT_URL } from '@/common/constants/url';
import { StatusCode } from '@/common/types';
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
  return axios({
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    url: `${ROOT_URL}/${LOGIN_API}`,
    data: params,
    withCredentials: true,
  });
};

export default login;
