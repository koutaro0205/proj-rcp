import { IMAGES } from '@/common/constants/images';
import { RecipeData } from '@/common/types/data';

const TIP = 'うまくできるコツをお教えします。';
const DESCRIPTION =
  '料理の説明が入ります。そしてまた、料理の説明が入ります。そんでもって、料理の説明が入るんです。';
const TITLE = '【レシピタイトル】レシピタイトル';
const POST_DATE = '2023/3/18';
const COOK_TIME = '10分';
const COST = '300円';
type Data = Omit<RecipeData, 'created_at'>;
export const RECIPES: Data[] = [];

// eslint-disable-next-line no-plusplus
for (let i = 1; i <= 12; i++) {
  const recipe = {
    id: i,
    image_url: IMAGES.dummyRecipe,
    updated_at: POST_DATE,
    title: TITLE,
    cook_time: COOK_TIME,
    cost: COST,
    tip: TIP,
    description: DESCRIPTION,
    serving_size: 1,
    category_id: 1,
  };
  RECIPES.push(recipe);
}
