// NOTE: ディレクトリ構成検討中
import { createAction, createSlice } from '@reduxjs/toolkit';

import { safeParseInt } from '@/utils/parse';

import {
  PostRecipeParams,
  RegisterIngredients,
  RegisterSteps,
  RemoveItem,
  RegisterSortedIngredients,
  RegisterSortedSteps,
} from './type';

type ImageInfo = {
  data: string | ArrayBuffer | null;
  filename: string;
};

export const INITIAL_IMAGE_INFO: ImageInfo = {
  data: null,
  filename: '',
};

const DEFAULT_RECIPE_STEP = {
  description: '',
  image: INITIAL_IMAGE_INFO,
};

const DEFAULT_RECIPE_INGREDIENT = {
  ingredient_name: '',
  quantity: '',
};

const initialState: PostRecipeParams = {
  title: '',
  image: INITIAL_IMAGE_INFO,
  cooking_time: '',
  cost: '',
  description: '',
  tip: '',
  serving_size: 0,
  recipe_ingredients_attributes: [
    DEFAULT_RECIPE_INGREDIENT,
    DEFAULT_RECIPE_INGREDIENT,
    DEFAULT_RECIPE_INGREDIENT,
  ],
  recipe_steps_attributes: [
    DEFAULT_RECIPE_STEP,
    DEFAULT_RECIPE_STEP,
    DEFAULT_RECIPE_STEP,
  ],
};

const ACTION_TYPE = {
  REGISTER_RECIPE_INFO: 'postRecipe/registerRecipeInfo',
  REGISTER_INGREDIENTS: 'postRecipe/registerIngredients',
  REGISTER_ADDITIONAL_INGREDIENT: 'postRecipe/registerAdditionalIngredient',
  REGISTER_REMOVED_INGREDIENT: 'postRecipe/registerRemovedIngredient',
  REGISTER_SORTED_INGREDIENTS: 'postRecipe/registerSortedIngredients',
  REGISTER_STEPS: 'postRecipe/registerSteps',
  REGISTER_ADDITIONAL_STEP: 'postRecipe/registerAdditionalStep',
  REGISTER_REMOVED_STEP: 'postRecipe/registerRemovedStep',
  REGISTER_SORTED_STEPS: 'postRecipe/registerSortedSteps',
  RESET_MAIN_IMAGE: 'postRecipe/resetMainImage',
  RESET_STEP_IMAGE: 'postRecipe/resetStepImage',
};

export const registerRecipeInfo = createAction<PostRecipeParams>(
  ACTION_TYPE.REGISTER_RECIPE_INFO
);

export const registerIngredients = createAction<RegisterIngredients>(
  ACTION_TYPE.REGISTER_INGREDIENTS
);

export const registerAdditionalIngredient = createAction(
  ACTION_TYPE.REGISTER_ADDITIONAL_INGREDIENT
);

export const registerRemovedIngredient = createAction<RemoveItem>(
  ACTION_TYPE.REGISTER_REMOVED_INGREDIENT
);

export const registerSortedIngredients =
  createAction<RegisterSortedIngredients>(
    ACTION_TYPE.REGISTER_SORTED_INGREDIENTS
  );

export const registerSteps = createAction<RegisterSteps>(
  ACTION_TYPE.REGISTER_STEPS
);

export const registerAdditionalStep = createAction(
  ACTION_TYPE.REGISTER_ADDITIONAL_STEP
);

export const registerRemovedStep = createAction<RemoveItem>(
  ACTION_TYPE.REGISTER_REMOVED_STEP
);

export const registerSortedSteps = createAction<RegisterSortedSteps>(
  ACTION_TYPE.REGISTER_SORTED_STEPS
);

export const resetMainImage = createAction(ACTION_TYPE.RESET_MAIN_IMAGE);
export const resetStepImage = createAction<RemoveItem>(
  ACTION_TYPE.RESET_STEP_IMAGE
);

export const postRecipeSlice = createSlice({
  name: 'postRecipe',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerRecipeInfo, (state, { payload }) => {
      state.title = payload.title;
      state.image = payload.image;
      state.cooking_time = payload.cooking_time;
      state.cost = payload.cost;
      state.description = payload.description;
      state.tip = payload.tip;
      state.serving_size = safeParseInt(0, payload.serving_size);
    });
    builder.addCase(registerIngredients, (state, { payload }) => {
      // 既存のフォーマットへの入力の場合
      if (typeof payload.index === 'number') {
        state.recipe_ingredients_attributes[payload.index].ingredient_name =
          payload.ingredient_name || '';
        state.recipe_ingredients_attributes[payload.index].quantity =
          payload.quantity ||
          state.recipe_ingredients_attributes[payload.index].quantity;
      }
    });
    builder.addCase(registerAdditionalIngredient, (state) => {
      state.recipe_ingredients_attributes = [
        ...state.recipe_ingredients_attributes,
        DEFAULT_RECIPE_INGREDIENT,
      ];
    });
    builder.addCase(registerRemovedIngredient, (state, { payload }) => {
      const updatedIngredients = [...state.recipe_ingredients_attributes];
      updatedIngredients.splice(payload.index, 1);
      state.recipe_ingredients_attributes = updatedIngredients;
    });
    builder.addCase(registerSortedIngredients, (state, { payload }) => {
      state.recipe_ingredients_attributes = payload.ingredients;
    });
    builder.addCase(registerSteps, (state, { payload }) => {
      // 既存のフォーマットへの入力の場合
      if (typeof payload.index === 'number') {
        state.recipe_steps_attributes[payload.index].description =
          payload.description || '';
        state.recipe_steps_attributes[payload.index].image =
          payload.image || state.recipe_steps_attributes[payload.index].image;
      }
    });
    builder.addCase(registerAdditionalStep, (state) => {
      state.recipe_steps_attributes = [
        ...state.recipe_steps_attributes,
        DEFAULT_RECIPE_STEP,
      ];
    });
    builder.addCase(registerRemovedStep, (state, { payload }) => {
      const updatedSteps = [...state.recipe_steps_attributes];
      updatedSteps.splice(payload.index, 1);
      state.recipe_steps_attributes = updatedSteps;
    });
    builder.addCase(registerSortedSteps, (state, { payload }) => {
      state.recipe_steps_attributes = payload.recipeSteps;
    });
    builder.addCase(resetMainImage, (state) => {
      state.image = INITIAL_IMAGE_INFO;
    });
    builder.addCase(resetStepImage, (state, { payload }) => {
      state.recipe_steps_attributes[payload.index].image = INITIAL_IMAGE_INFO;
    });
  },
});

export default postRecipeSlice.reducer;
