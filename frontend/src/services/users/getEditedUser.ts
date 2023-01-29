import { USER_EDIT_PATH } from '@/common/constants/path';
import { client } from '@/utils/axios';

import { NormalResponse, InvalidResponse } from './types';
/**
 * ユーザーAPI（一覧取得）
 * @param context APIコンテキスト
 * @returns ユーザー一覧
 */

type ResponseData = NormalResponse | InvalidResponse;

const getEditedUser = async (userId: number): Promise<ResponseData> => {
  const response = await client.get(USER_EDIT_PATH(userId));
  return response.data;
};

export default getEditedUser;
