import { RECIPES_PATH } from '@/common/constants/path';
import { StatusCode } from '@/common/types';
import { RecipeData } from '@/common/types/data';
import { PostRecipeParams } from '@/features/postRecipe/type';
import { client } from '@/utils/axios';

/**
 * @param params パラメータ
 * @returns
 */

type ResponseData = {
  status: Extract<StatusCode, 'unprocessable_entity' | 'created'>;
  recipe: RecipeData;
  // エラー時
  errors?: string[];
};

const postRecipe = async (params: PostRecipeParams): Promise<ResponseData> => {
  const response = await client.post(RECIPES_PATH, params);
  return response.data;
};

export default postRecipe;
