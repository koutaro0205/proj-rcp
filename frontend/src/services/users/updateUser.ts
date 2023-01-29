import { USERS_PATH } from '@/common/constants/path';
import { client } from '@/utils/axios';

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
  const response = await client.patch(`${USERS_PATH}/${id}`, params);
  return response.data;
};

export default updateUser;
