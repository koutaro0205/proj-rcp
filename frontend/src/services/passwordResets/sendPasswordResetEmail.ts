import { PASSWORD_RESETS_REQUEST_PATH } from '@/common/constants/path';
import { StatusCode } from '@/common/types';
import { User } from '@/common/types/data';
import { client } from '@/utils/axios';

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
  return client.post(PASSWORD_RESETS_REQUEST_PATH, params);
};

export default sendPasswordResetEmail;
