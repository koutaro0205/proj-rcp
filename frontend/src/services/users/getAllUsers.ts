import { User, ApiContext } from '@/@types/data';
import { USERS_PATH } from '@/common/constants/path';
import { fetcher } from '@/utils/fetchData';

/**
 * ユーザーAPI（一覧取得）
 * @param context APIコンテキスト
 * @returns ユーザー一覧
 */
const getAllUsers = async (context: ApiContext): Promise<User[]> => {
  // すべのユーザーデータを持った配列を定義
  return fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/${USERS_PATH}`, {
    headers: {
      Origin: '*',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

export default getAllUsers;

// こんな感じで使う
// const context: ApiContext = {
//   apiRootUrl: process.env.API_BASE_URL || 'http://localhost:5000',
// }
// const users = await getAllUsers(context)

// import axios from 'axios';

// const ALL_USERS_URL = 'http://localhost:3000/api/v1/users';

// const getAllUsers = async () => {
//   const response = await axios.get(ALL_USERS_URL);
//   return response.data;
// };

// export default getAllUsers;
