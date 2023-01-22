import axios from 'axios';

import { USERS_API } from '@/common/constants/path';
import { ROOT_URL } from '@/common/constants/url';

import { UserParams, UserCreateOrUpdateResponse } from './types';

type ResponseData = UserCreateOrUpdateResponse;

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
