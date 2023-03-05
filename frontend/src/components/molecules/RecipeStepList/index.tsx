import React from 'react';

import IconButton from '@/components/atoms/Button/IconButton';
import { Stack } from '@/components/layouts/Stack';
import FormLabel from '@/components/molecules/FormItem/FormLabel';
import {
  FileObject,
  RecipeStep,
} from '@/components/organisms/PostRecipeForm/usePostRecipeForm';

import RecipeStepItem from './RecipeStepItem';
import styles from './styles';
import { useRecipeStepList } from './useRecipeStepList';

type Props = {
  inputId: string;
  inputName: string;
  recipeSteps: RecipeStep[];
  stepFiles: FileObject[][];
  sortStepFiles: React.Dispatch<React.SetStateAction<FileObject[][]>>;
  onClickAddStep: () => void;
  onClickRemoveStep: (index: number) => void;
  onClickResetImage: (index: number) => void;
  onStepInputChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: keyof RecipeStep
  ) => void;
};

const RecipeStepList: React.FC<Props> = ({
  inputId,
  inputName,
  stepFiles,
  sortStepFiles,
  onStepInputChange,
  onClickAddStep,
  onClickRemoveStep,
  onClickResetImage,
  recipeSteps,
}) => {
  const {
    steps,
    dragIndex,
    recipeParams,
    handleDragEnd,
    handleDragEnter,
    handleDragStart,
  } = useRecipeStepList({ recipeSteps, sortStepFiles });

  return (
    <div className={styles.container}>
      <FormLabel htmlFor={inputId} isRequired>
        作り方
      </FormLabel>
      <Stack size="s" />
      <div className={styles.stepsContainer}>
        {steps.map((_, index) => (
          <RecipeStepItem
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            inputId={inputId}
            inputName={inputName}
            onChangeStepInput={onStepInputChange}
            onClickRemoveStep={onClickRemoveStep}
            onClickResetImage={onClickResetImage}
            orderIndex={index}
            dragIndex={dragIndex}
            inputValue={recipeParams.recipe_steps_attributes[index]}
            onDragStart={handleDragStart}
            onDragEnter={handleDragEnter}
            onDragEnd={handleDragEnd}
            imageUrl={
              stepFiles[index]?.length ? stepFiles[index][0].dataUrl : ''
            }
            file={stepFiles[index]?.length ? stepFiles[index][0].file : null}
          />
        ))}
      </div>
      <Stack size="ml" />
      <div className={styles.buttonWrapper}>
        <IconButton
          label="作り方を追加"
          iconName="PLUS"
          onClick={onClickAddStep}
        />
      </div>
    </div>
  );
};

export default RecipeStepList;
