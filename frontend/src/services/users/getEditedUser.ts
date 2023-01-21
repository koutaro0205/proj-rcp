import { User } from '@/@types/data';
import { USER_EDIT_API } from '@/common/constants/path';
import { ROOT_URL } from '@/common/constants/url';
import { StatusCode } from '@/common/types';
import axios from '@/utils/axios';

/**
 * ユーザーAPI（一覧取得）
 * @param context APIコンテキスト
 * @returns ユーザー一覧
 */

type NormalResponse = {
  status: Extract<StatusCode, 'ok'>;
  user: User;
};

// NOTE: カレントユーザー以外のアクセスに対するレスポンス
type InvalidResponse = {
  status: Extract<StatusCode, 'forbidden'>; //
};

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
