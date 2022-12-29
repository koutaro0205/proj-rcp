import { User } from '@/@types/data';
import { PASSWORD_RESETS_API } from '@/common/constants/path';
import { ROOT_URL } from '@/common/constants/url';
import { StatusCode } from '@/common/types';
import axios from '@/utils/axios';

type Params = {
  email: string | string[] | undefined;
};

type NomalResponse = {
  user: User;
  status: StatusCode;
};

type InvalidResponse = {
  status: StatusCode;
};

type ResponseData = NomalResponse | InvalidResponse;

const sendPasswordResetEmail = async (
  params: Params
): Promise<ResponseData> => {
  return axios({
    method: 'post',
    url: `${ROOT_URL}/${PASSWORD_RESETS_API}`,
    data: params,
    withCredentials: true,
  });
};

export default sendPasswordResetEmail;
