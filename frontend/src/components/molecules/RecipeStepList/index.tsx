import React from 'react';

import IconButton from '@/components/atoms/Button/IconButton';
import { Stack } from '@/components/layouts/Stack';
import FormLabel from '@/components/molecules/FormItem/FormLabel';
import {
  FileObject,
  PostRecipeStep,
} from '@/components/organisms/PostRecipeForm/usePostRecipeForm';

import RecipeStepItem from './RecipeStepItem';
import styles from './styles';
import { useRecipeStepList } from './useRecipeStepList';

type Props = {
  inputId: string;
  inputName: string;
  recipeSteps: PostRecipeStep[];
  // stepFiles: FileObject[][];
  // onClickResetImage: (index: number) => void;
  sortStepFiles: React.Dispatch<React.SetStateAction<FileObject[][]>>;
  onClickAddStep: () => void;
  onClickRemoveStep: (index: number) => void;
  onStepInputChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: keyof PostRecipeStep
  ) => void;
};

const RecipeStepList: React.FC<Props> = ({
  inputId,
  inputName,
  sortStepFiles,
  onStepInputChange,
  onClickAddStep,
  onClickRemoveStep,
  // stepFiles,
  // onClickResetImage,
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
            orderIndex={index}
            dragIndex={dragIndex}
            inputValue={recipeParams.recipe_steps_attributes[index]}
            onDragStart={handleDragStart}
            onDragEnter={handleDragEnter}
            onDragEnd={handleDragEnd}
            // HACK: KOU-146 Stepの画像を投稿できるように修正する。
            // onClickResetImage={onClickResetImage}
            // imageUrl={
            //   stepFiles[index]?.length ? stepFiles[index][0].dataUrl : ''
            // }
            // file={stepFiles[index]?.length ? stepFiles[index][0].file : null}
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
