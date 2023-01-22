import { USER_EDIT_API } from '@/common/constants/path';
import { ROOT_URL } from '@/common/constants/url';
import axios from '@/utils/axios';

import { NormalResponse, InvalidResponse } from './types';
/**
 * ユーザーAPI（一覧取得）
 * @param context APIコンテキスト
 * @returns ユーザー一覧
 */

type ResponseData = NormalResponse | InvalidResponse;

const getEditedUser = async (userId: number): Promise<ResponseData> => {
  const response = await axios.get(`${ROOT_URL}/${USER_EDIT_API(userId)}`, {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
  });
  // axios.defaults.headers.common['X-CSRF-Token'] =
  //   response.headers['X-CSRF-Token'];
  return response.data;
};

export default getEditedUser;
