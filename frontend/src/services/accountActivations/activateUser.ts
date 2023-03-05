import { ACCOUNT_ACTIVATIONS_PATH } from '@/common/constants/path';
import { StatusCode } from '@/common/types';
import { User } from '@/common/types/data';
import { client } from '@/utils/axios';

type Params = {
  token: string | string[] | undefined;
  email: string | string[] | undefined;
};

type NormalResponse = {
  status: StatusCode;
  logged_in: boolean;
  activated: boolean | null;
  user: User;
};

type InvalidResponse = {
  status: StatusCode;
  logged_in: boolean;
  activated: boolean | null;
};

export type ResponseData = NormalResponse & InvalidResponse;

const activate = async ({ token, email }: Params): Promise<ResponseData> => {
  const response = await client.get(
    `${ACCOUNT_ACTIVATIONS_PATH}/${token}/edit?email=${email}`
  );
  return response.data;
};

export default activate;
