import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '@/common/store';

import { selectRgisteredRecipeInfo } from './selectors';
import {
  registerRecipeInfo as _registerRecipeInfo,
  registerIngredients as _registerIngredients,
  registerAdditionalIngredient as _registerAdditionalIngredient,
  registerRemovedIngredient as _registerRemovedIngredient,
  registerSortedIngredients as _registerSortedIngredients,
  registerSteps as _registerSteps,
  registerAdditionalStep as _registerAdditionalStep,
  registerRemovedStep as _registerRemovedStep,
  registerSortedSteps as _registerSortedSteps,
  resetMainImage as _resetMainImage,
} from './slice';
import {
  PostRecipeParams,
  RegisterIngredients,
  RegisterSortedIngredients,
  RegisterSortedSteps,
  RegisterSteps,
  RemoveItem,
} from './type';

export const usePostRecipe = () => {
  const dispatch: AppDispatch = useDispatch();

  const recipeParams = useSelector(selectRgisteredRecipeInfo);

  const registerRecipeInfo = useCallback(
    (params: PostRecipeParams) => {
      dispatch(_registerRecipeInfo(params));
    },
    [dispatch]
  );

  const registerIngredients = useCallback(
    (ingredient: RegisterIngredients) => {
      dispatch(_registerIngredients(ingredient));
    },
    [dispatch]
  );

  const registerAdditionalIngredient = useCallback(() => {
    dispatch(_registerAdditionalIngredient());
  }, [dispatch]);

  const registerRemovedIngredient = useCallback(
    (ingredientItem: RemoveItem) => {
      dispatch(_registerRemovedIngredient(ingredientItem));
    },
    [dispatch]
  );

  const registerSortedIngredients = useCallback(
    (sortedIngredients: RegisterSortedIngredients) => {
      dispatch(_registerSortedIngredients(sortedIngredients));
    },
    [dispatch]
  );

  const registerSteps = useCallback(
    (step: RegisterSteps) => {
      dispatch(_registerSteps(step));
    },
    [dispatch]
  );

  const registerAdditionalStep = useCallback(() => {
    dispatch(_registerAdditionalStep());
  }, [dispatch]);

  const registerRemovedStep = useCallback(
    (stepItem: RemoveItem) => {
      dispatch(_registerRemovedStep(stepItem));
    },
    [dispatch]
  );

  const registerSortedSteps = useCallback(
    (sortedSteps: RegisterSortedSteps) => {
      dispatch(_registerSortedSteps(sortedSteps));
    },
    [dispatch]
  );

  const resetMainImage = useCallback(() => {
    dispatch(_resetMainImage());
  }, [dispatch]);

  return {
    recipeParams,
    registerRecipeInfo,
    registerIngredients,
    registerAdditionalIngredient,
    registerRemovedIngredient,
    registerSortedIngredients,
    registerSteps,
    registerAdditionalStep,
    registerRemovedStep,
    registerSortedSteps,
    resetMainImage,
  };
};
