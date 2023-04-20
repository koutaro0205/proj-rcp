import { FAVORITE_RECIPES_REQUEST_PATH } from '@/common/constants/path';
import { RecipeCard } from '@/common/types/data';
import { client } from '@/utils/axios';

export const getFavoriteRecipeList = async (): Promise<RecipeCard[]> => {
  const response = await client.get(FAVORITE_RECIPES_REQUEST_PATH);
  return response.data;
};
