import { useCallback, useEffect, useState } from 'react';

import { PostIngredient } from '@/components/organisms/PostRecipeForm/usePostRecipeForm';
import { usePostRecipe } from '@/features/postRecipe/usePostRecipe';

// FIXME: すぐ消す
export type IngredientItem = {
  id: string;
  ingredient: string;
  quantity: string;
};

export const useIngredientList = (ingredients: PostIngredient[]) => {
  const [ingredientsList, setIngredientsList] =
    useState<PostIngredient[]>(ingredients);

  const { recipeParams, registerSortedIngredients } = usePostRecipe();

  // NOTE: ingredientsが更新された時にingredientsListの初期値も更新する。
  useEffect(() => {
    setIngredientsList(ingredients);
  }, [ingredients]);

  const [dragIndex, setDragIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDragIndex(index);
  };

  const handleDragEnter = useCallback(
    (index: number) => {
      if (index === dragIndex) return;
      setIngredientsList((prevState) => {
        const newIngeredients = JSON.parse(JSON.stringify(prevState));
        const removedIngeredient = newIngeredients.splice(dragIndex, 1)[0];
        newIngeredients.splice(index, 0, removedIngeredient);
        return newIngeredients;
      });

      setDragIndex(index);
    },
    [dragIndex]
  );

  const handleDragEnd = () => {
    registerSortedIngredients({ ingredients: ingredientsList });
    setDragIndex(null);
  };

  return {
    ingredientsList,
    dragIndex,
    recipeParams,
    handleDragEnd,
    handleDragEnter,
    handleDragStart,
  };
};
