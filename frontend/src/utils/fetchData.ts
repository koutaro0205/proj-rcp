import { API_REQUEST_ERROR } from '@/common/constants/errorMessage';

import { handleResponseError } from './requestError';

export const fetcher = async (
  resource: RequestInfo,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  init?: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => {
  const response = await fetch(resource, init);

  if (!response.ok) {
    const errorResponse = await response.json();
    const error = new Error(errorResponse.message ?? API_REQUEST_ERROR);
    handleResponseError(API_REQUEST_ERROR);

    throw error;
  }

  return response.json();
};
