import { LOGOUT_PATH } from '@/common/constants/path';
import { client } from '@/utils/axios';

const logout = async () => {
  return client.delete(LOGOUT_PATH);
};

export default logout;
