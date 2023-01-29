import { USERS_PATH } from '@/common/constants/path';
import { client } from '@/utils/axios';

import { UserParams, UserCreateOrUpdateResponse } from './types';

type ResponseData = UserCreateOrUpdateResponse;

/**
 * 認証API（サインイン）
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns ログインユーザー
 */
const signup = async (params: UserParams): Promise<ResponseData> => {
  return client.post(USERS_PATH, params);
};

export default signup;
