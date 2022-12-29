import { User } from '@/@types/data';
import { PASSWORD_RESETS_API } from '@/common/constants/path';
import { ROOT_URL } from '@/common/constants/url';
import { StatusCode } from '@/common/types';
import { Params } from '@/hooks/useGetQueryParameters';
import axios from '@/utils/axios';

type PasswordParams = {
  password: string;
  password_confirmation: string;
};

type NomalResponse = {
  user: User;
  status: StatusCode;
  logged_in: boolean;
};

type InvalidResponse = {
  status: StatusCode;
};

export type ResponseData = NomalResponse & InvalidResponse;

const resetPassword = async (
  params: Params,
  passwordParams: PasswordParams
): Promise<ResponseData> => {
  const response = await axios({
    method: 'patch',
    url: `${ROOT_URL}/${PASSWORD_RESETS_API}/${params.token}?email=${params.email}`,
    data: passwordParams,
    withCredentials: true,
  });
  return response.data;
};

export default resetPassword;
