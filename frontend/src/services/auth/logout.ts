import { ApiContext } from '@/@types/data';
import { LOGOUT_PATH } from '@/common/constants/path';
import axios from '@/utils/axios';

const logout = async (context: ApiContext) => {
  return axios({
    method: 'delete',
    url: `${context.apiRootUrl.replace(/\/$/g, '')}/${LOGOUT_PATH}`,
    withCredentials: true,
  });
};

export default logout;