import { LOGOUT_API } from '@/common/constants/path';
import { ROOT_URL } from '@/common/constants/url';
import axios from '@/utils/axios';

const logout = async () => {
  return axios({
    method: 'delete',
    url: `${ROOT_URL}/${LOGOUT_API}`,
    withCredentials: true,
  });
};

export default logout;
