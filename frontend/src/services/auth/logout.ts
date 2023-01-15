import { LOGOUT_API } from '@/common/constants/path';
import { ROOT_URL } from '@/common/constants/url';
import axios from '@/utils/axios';

const logout = async () => {
  return axios({
    method: 'delete',
    url: `${ROOT_URL}/${LOGOUT_API}`,
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
  });
};

export default logout;
