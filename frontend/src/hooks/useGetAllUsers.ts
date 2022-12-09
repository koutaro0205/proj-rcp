import useSWR from 'swr';

import { USERS_API } from '@/common/constants/path';
import { ROOT_URL } from '@/common/constants/url';
import { fetcher } from '@/utils/fetchData';

/**
 * ユーザーAPI（一覧取得）
 * @returns ユーザー一覧
 */
const useGetAllUsers = () => {
  const { data, error } = useSWR(`${ROOT_URL}/${USERS_API}`, fetcher);

  return { data, error };
};

export default useGetAllUsers;
