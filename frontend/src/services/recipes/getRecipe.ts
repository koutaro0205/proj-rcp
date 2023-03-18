import { RECIPE_DETAIL_PATH } from '@/common/constants/path';
import { Recipe } from '@/common/types/data';
import { client } from '@/utils/axios';

/**
 * レシピAPI
 * @returns レシピ
 */

const getRecipe = async (recipeId: number): Promise<Recipe> => {
  const response = await client.get(RECIPE_DETAIL_PATH(recipeId));
  return response.data;
};

export default getRecipe;
