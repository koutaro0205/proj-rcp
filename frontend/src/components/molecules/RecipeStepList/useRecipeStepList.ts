import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AppDispatch } from '@/common/store';
import {
  FileObject,
  PostRecipeStep,
} from '@/components/organisms/PostRecipeForm/usePostRecipeForm';
import { selectRgisteredRecipeInfo } from '@/features/postRecipe/selectors';
import { registerSortedSteps } from '@/features/postRecipe/slice';

type Args = {
  recipeSteps: PostRecipeStep[];
  sortStepFiles: React.Dispatch<React.SetStateAction<FileObject[][]>>;
};

export const useRecipeStepList = ({ recipeSteps, sortStepFiles }: Args) => {
  const [steps, setSteps] = useState<PostRecipeStep[]>(recipeSteps);
  const [dragIndex, setDragIndex] = useState<number | null>(null);

  const recipeParams = useSelector(selectRgisteredRecipeInfo);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    setSteps(recipeSteps);
  }, [recipeSteps]);

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

      sortStepFiles((prevState) => {
        const newStepFiles = JSON.parse(JSON.stringify(prevState));
        const removedStepFiles = newStepFiles.splice(dragIndex, 1)[0];
        newStepFiles.splice(index, 0, removedStepFiles);
        return newStepFiles;
      });

      setDragIndex(index);
    },
    [dragIndex, sortStepFiles]
  );

  const handleDragEnd = () => {
    dispatch(registerSortedSteps({ recipeSteps: steps }));
    setDragIndex(null);
  };

  return {
    steps,
    dragIndex,
    recipeParams,
    handleDragEnd,
    handleDragEnter,
    handleDragStart,
  };
};
