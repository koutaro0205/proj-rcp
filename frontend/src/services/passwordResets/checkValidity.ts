import { PASSWORD_RESETS_REQUEST_PATH } from '@/common/constants/path';
import { StatusCode } from '@/common/types';
import { Params } from '@/hooks/useQueryParameters';
import { client } from '@/utils/axios';

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
  const response = await client.get(
    `${PASSWORD_RESETS_REQUEST_PATH}/${params.token}/edit?email=${params.email}`
  );
  return response.data;
};

export default checkValidity;
