import { useCallback, useState } from 'react';

export type RecipeStep = {
  id: string;
  body: string;
};

export const useRecipeStepList = (recipeSteps: RecipeStep[]) => {
  const [steps, setSteps] = useState<RecipeStep[]>(recipeSteps);
  const [dragIndex, setDragIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDragIndex(index);
  };

  const handleDragEnter = useCallback(
    (index: number) => {
      if (index === dragIndex) return;
      setSteps((prevState) => {
        const newSteps = JSON.parse(JSON.stringify(prevState));
        const removedStep = newSteps.splice(dragIndex, 1)[0];
        newSteps.splice(index, 0, removedStep);
        return newSteps;
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
    steps,
    dragIndex,
    handleDragEnd,
    handleDragEnter,
    handleDragStart,
  };
};
