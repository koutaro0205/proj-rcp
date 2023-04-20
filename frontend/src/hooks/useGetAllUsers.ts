import useSWR from 'swr';

import { USERS_PATH } from '@/common/constants/path';
import { User } from '@/common/types/data';
import { fetcher } from '@/utils/fetchData';
import { handleResponseError } from '@/utils/requestError';

/**
 * ユーザー一覧を取得（SWRでフェッチ）
 * @returns ユーザー一覧
 */
const useGetAllUsers = () => {
  const { data, error } = useSWR(USERS_PATH, fetcher);
  const users: User[] = data || [];

  if (error) {
    handleResponseError('ユーザーの取得に失敗しました。');
  }

  return { users };
};

export default useGetAllUsers;
