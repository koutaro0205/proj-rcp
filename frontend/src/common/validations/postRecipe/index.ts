import { PostRecipeParams } from '@/features/postRecipe/type';

type Args = {
  recipeParams: PostRecipeParams;
};

// FIXME: エラーメッセージの文言は暫定
export const validateRecipeParams = ({ recipeParams }: Args) => {
  const errors: string[] = [];

  const addErrorMessages = (message: string) => {
    errors.push(message);
  };

  const checkStepDescription = (): boolean => {
    const result = recipeParams.recipe_steps_attributes.map((step) => {
      return !!step.description;
    });
    return result.some(Boolean);
  };

  const checkIngredientName = (): boolean => {
    const result = recipeParams.recipe_ingredients_attributes.map(
      (ingredient) => {
        return !!ingredient.ingredient_name;
      }
    );
    return result.some(Boolean);
  };

  const hasTitle = !!recipeParams.title;
  const hasCookingTime = !!recipeParams.cook_time;
  const hasDescription = !!recipeParams.description;
  const hasServingSize = !!recipeParams.serving_size;
  const hasCategoryId = !!recipeParams.category_id;
  const hasIngredients = !!recipeParams.recipe_ingredients_attributes.length;
  const hasSteps = !!recipeParams.recipe_steps_attributes.length;
  const hasStepDescription = checkStepDescription();
  const hasIngredientName = checkIngredientName();

  if (!hasTitle) {
    addErrorMessages('レシピのタイトルを入力してください。');
  }

  if (!hasCookingTime) {
    addErrorMessages('調理時間を選択してください。');
  }

  if (!hasDescription) {
    addErrorMessages('レシピの概要・説明を入力してください。');
  }

  if (!hasServingSize) {
    addErrorMessages('材料の分量を入力してください。');
  }

  if (!hasIngredients) {
    addErrorMessages('1種類以上レシピの材料を入力してください。');
  }

  if (!hasSteps) {
    addErrorMessages('1つ以上作り方の説明を入力してください。');
  }

  if (!hasCategoryId) {
    addErrorMessages('レシピのカテゴリを選択してください。');
  }

  if (!hasStepDescription) {
    addErrorMessages(
      '作り方の説明は必須です。（説明を記載しない場合は項目を削除してください。）'
    );
  }

  if (!hasIngredientName) {
    addErrorMessages(
      'レシピの材料は必須です。（材料を記載しない場合は項目を削除してください。）'
    );
  }

  return errors;
};
