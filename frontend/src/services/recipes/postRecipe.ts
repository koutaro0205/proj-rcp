import { RECIPES_PATH } from '@/common/constants/path';
import { PostRecipeParams } from '@/features/postRecipe/type';
import { client } from '@/utils/axios';

/**
 * @param params パラメータ
 * @returns ログインユーザー
 */
const postRecipe = async (params: PostRecipeParams): Promise<unknown> => {
  return client.post(RECIPES_PATH, params);
};

export default postRecipe;
