import useSWR from 'swr';

import { User } from '@/@types/data';
import { USERS_PATH } from '@/common/constants/path';
import { ROOT_URL } from '@/common/constants/url';
import { fetcher } from '@/utils/fetchData';
import { handleResponseError } from '@/utils/requestError';

/**
 * ユーザーAPI（一覧取得）
 * @param context APIコンテキスト
 * @returns ユーザー一覧
 */

const getAllUsers = async (url: string): Promise<User[] | void> => {
  // return fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/${USERS_PATH}`, {
  //   headers: {
  //     Origin: '*',
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, error } = useSWR(`${ROOT_URL}/${USERS_PATH}`, fetcher);
  if (error) return handleResponseError('エラー');
  return data;

  // });
};

export default getAllUsers;
