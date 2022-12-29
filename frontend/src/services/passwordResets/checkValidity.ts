import { PASSWORD_RESETS_API } from '@/common/constants/path';
import { ROOT_URL } from '@/common/constants/url';
import { StatusCode } from '@/common/types';
import { Params } from '@/hooks/useGetQueryParameters';
import axios from '@/utils/axios';

type NormalResponse = {
  status: StatusCode;
};

type AbnormalResponse = {
  status: StatusCode;
  expired: boolean;
};

type InvalidResponse = {
  status: StatusCode;
};

export type ResponseData = NormalResponse & AbnormalResponse & InvalidResponse;

const checkValidity = async (params: Params): Promise<ResponseData> => {
  const response = await axios.get(
    `${ROOT_URL}/${PASSWORD_RESETS_API}/${params.token}/edit?email=${params.email}`,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export default checkValidity;
