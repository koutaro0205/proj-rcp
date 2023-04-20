import { FAVORITES_REQUEST_PATH } from '@/common/constants/path';
import { RecipeData } from '@/common/types/data';
import { client } from '@/utils/axios';

type ResponseData = {
  recipe: RecipeData;
};

export const addToFavorite = async (
  recipe: RecipeData
): Promise<ResponseData> => {
  const response = await client.post(FAVORITES_REQUEST_PATH, recipe);
  return response.data;
};
