import { RECIPES_PATH } from '@/common/constants/path';
import { client } from '@/utils/axios';

/**
 * @returns レシピ一覧
 */

const getAllRecipes = async (): Promise<unknown[]> => {
  const response = await client.get(RECIPES_PATH);
  return response.data;
};

export default getAllRecipes;
