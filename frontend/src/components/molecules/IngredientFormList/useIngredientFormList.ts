import { useCallback, useState } from 'react';

export type IngredientItem = {
  id: string;
  ingredient: string;
  quantity: string;
};

export const useIngredientList = (ingredients: IngredientItem[]) => {
  const [ingredientsList, setIngredientsList] =
    useState<IngredientItem[]>(ingredients);
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
    // HACK: 並び替え後のusers配列をサーバに送信する処理を追加する
    setDragIndex(null);
  };

  return {
    ingredientsList,
    dragIndex,
    handleDragEnd,
    handleDragEnter,
    handleDragStart,
  };
};
