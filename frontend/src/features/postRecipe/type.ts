import {
  Ingredient,
  RecipeStep,
} from '@/components/organisms/PostRecipeForm/usePostRecipeForm';

export type ImageInfo = {
  data: string | ArrayBuffer | null;
  filename: string;
};

export type PostRecipeParams = {
  title: string;
  image?: ImageInfo;
  cooking_time: string;
  cost: string;
  description: string;
  tip: string;
  serving_size: number;
  recipe_ingredients_attributes: Ingredient[];
  recipe_steps_attributes: RecipeStep[];
};

export type RegisterIngredients = {
  index: number;
  ingredient_name?: string;
  quantity?: string;
};

export type RegisterSteps = {
  index: number;
  description?: string;
  image?: ImageInfo;
};

export type RemoveItem = {
  index: number;
};

export type RegisterSortedIngredients = {
  ingredients: Ingredient[];
};

export type RegisterSortedSteps = {
  recipeSteps: RecipeStep[];
};
