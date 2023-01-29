import { User } from '@/@types/data';
import { PASSWORD_RESETS_REQUEST_PATH } from '@/common/constants/path';
import { StatusCode } from '@/common/types';
import { Params } from '@/hooks/useQueryParameters';
import { client } from '@/utils/axios';

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
  const response = await client.patch(
    `${PASSWORD_RESETS_REQUEST_PATH}/${params.token}?email=${params.email}`,
    passwordParams
  );
  return response.data;
};

export default resetPassword;
