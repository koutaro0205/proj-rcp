import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AppDispatch } from '@/common/store';
import { Ingredient } from '@/components/organisms/PostRecipeForm/usePostRecipeForm';
import { selectRgisteredRecipeInfo } from '@/features/postRecipe/selectors';
import { registerSortedIngredients } from '@/features/postRecipe/slice';

// FIXME: すぐ消す
export type IngredientItem = {
  id: string;
  ingredient: string;
  quantity: string;
};

export const useIngredientList = (ingredients: Ingredient[]) => {
  const [ingredientsList, setIngredientsList] =
    useState<Ingredient[]>(ingredients);

  const recipeParams = useSelector(selectRgisteredRecipeInfo);
  const dispatch: AppDispatch = useDispatch();

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
    dispatch(registerSortedIngredients({ ingredients: ingredientsList }));
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
