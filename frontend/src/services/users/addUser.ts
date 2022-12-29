import axios from 'axios';

import { User } from '@/@types/data';
import { USERS_API } from '@/common/constants/path';
import { ROOT_URL } from '@/common/constants/url';
import { StatusCode } from '@/common/types';

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

type NormalResponse = {
  status: StatusCode;
  user: User;
};

type ErrorResponse = {
  errors: string[];
  status: StatusCode;
};

type ResponseData = NormalResponse & ErrorResponse;

/**
 * 認証API（サインイン）
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns ログインユーザー
 */
const signup = async (params: UserParams): Promise<ResponseData> => {
  return axios({
    method: 'post',
    url: `${ROOT_URL}/${USERS_API}`,
    data: params,
    withCredentials: true,
  });
};

export default signup;
