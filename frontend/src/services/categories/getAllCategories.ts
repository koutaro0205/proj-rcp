import { CATEGORIES_PATH } from '@/common/constants/path';
import { Category } from '@/common/types/data';
import { client } from '@/utils/axios';

/**
 * @returns カテゴリ一覧
 */

export const getAllCategories = async (): Promise<Category[]> => {
  const response = await client.get(CATEGORIES_PATH);
  return response.data;
};
