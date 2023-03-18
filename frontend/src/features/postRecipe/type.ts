import { ImageInfo } from '@/common/types';
import {
  PostIngredient,
  PostRecipeStep,
} from '@/components/organisms/PostRecipeForm/usePostRecipeForm';

export type PostRecipeParams = {
  title: string;
  image?: ImageInfo;
  cook_time: string;
  cost: string;
  description: string;
  tip: string;
  serving_size: number;
  recipe_ingredients_attributes: PostIngredient[];
  recipe_steps_attributes: PostRecipeStep[];
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
  ingredients: PostIngredient[];
};

export type RegisterSortedSteps = {
  recipeSteps: PostRecipeStep[];
};
