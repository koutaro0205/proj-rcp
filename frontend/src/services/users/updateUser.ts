import axios from 'axios';

import { USERS_API } from '@/common/constants/path';
import { ROOT_URL } from '@/common/constants/url';

import { UserParams, UserCreateOrUpdateResponse } from './types';

/**
 * ユーザー情報更新API
 * @param params パラメータ
 * @returns 更新情報
 */

type ResponseData = UserCreateOrUpdateResponse;

export type Args = {
  params: UserParams;
  id: number;
};

const updateUser = async ({ params, id }: Args): Promise<ResponseData> => {
  const response = await axios({
    method: 'patch',
    url: `${ROOT_URL}/${USERS_API}/${id}`,
    data: params,
    withCredentials: true,
  });
  return response.data;
};

export default updateUser;
