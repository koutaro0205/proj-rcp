import { FAVORITE_STATUS_PATH } from '@/common/constants/path';
import { client } from '@/utils/axios';

type ResponseData = {
  is_favorite: boolean;
  favorite_count: number;
};

export const getFavoriteStatus = async (
  recipeId: number
): Promise<ResponseData> => {
  const response = await client.get(FAVORITE_STATUS_PATH(recipeId));
  return response.data;
};
