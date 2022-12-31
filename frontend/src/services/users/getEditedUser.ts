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
  status: StatusCode;
  user: User;
};

// NOTE: カレントユーザー以外のアクセスに対するレスポンス
type InvalidResponse = {
  status: 'forbidden'; //
};

type ResponseData = NormalResponse | InvalidResponse;

const getEditedUser = async (userId: number): Promise<ResponseData> => {
  const response = await axios.get(`${ROOT_URL}/${USER_EDIT_API(userId)}`, {
    withCredentials: true,
  });
  return response.data;
};

export default getEditedUser;
