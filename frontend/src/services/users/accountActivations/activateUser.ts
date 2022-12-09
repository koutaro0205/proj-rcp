import { User } from '@/@types/data';
import { ACCOUNT_ACTIVATIONS_API } from '@/common/constants/path';
import { ROOT_URL } from '@/common/constants/url';
import axios from '@/utils/axios';

type Params = {
  token: string | string[] | undefined;
  email: string | string[] | undefined;
};

export type ResponseData = {
  status: string;
  logged_in: boolean;
  activated: boolean | null;
  user?: User;
};

const activate = async ({ token, email }: Params): Promise<ResponseData> => {
  const response = await axios.get(
    `${ROOT_URL}/${ACCOUNT_ACTIVATIONS_API}/${token}/edit?email=${email}`,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export default activate;
