import { FAVORITES_REQUEST_PATH } from '@/common/constants/path';
import { RecipeData } from '@/common/types/data';
import { client } from '@/utils/axios';

type ResponseData = {
  recipe: RecipeData;
};

export const removeFromFavorite = async (
  recipeId: number
): Promise<ResponseData> => {
  const response = await client.delete(`${FAVORITES_REQUEST_PATH}/${recipeId}`);
  return response.data;
};
