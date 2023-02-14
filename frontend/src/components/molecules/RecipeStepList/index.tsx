import React from 'react';

import IconButton from '@/components/atoms/Button/IconButton';
import { Stack } from '@/components/layouts/Stack';
import FormLabel from '@/components/molecules/FormItem/FormLabel';

import RecipeStepItem from './RecipeStepItem';
import styles from './styles';
import { RecipeStep, useRecipeStepList } from './useRecipeStepList';

// FIXME: 上位のコンポーネントに定義し直す。

type Props = {
  inputId: string;
  inputName: string;
  // 作り方のデータ（配列で管理）
  recipeSteps: RecipeStep[];
  // setRecipeSteps: Dispatch<SetStateAction<RecipeStep[]>>;
  onClickAddStep: () => void;
  onClickRemoveStep: () => void;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

// FIXME: 「=textarea」を修正する。
const RecipeStepList: React.FC<Props> = ({
  inputId,
  inputName,
  onChange,
  onClickAddStep,
  onClickRemoveStep,
  recipeSteps,
}) => {
  const { steps, dragIndex, handleDragEnd, handleDragEnter, handleDragStart } =
    useRecipeStepList(recipeSteps);
  return (
    <div className={styles.container}>
      <FormLabel htmlFor={inputId} isRequired>
        作り方
      </FormLabel>
      <Stack size="s" />
      <div className={styles.stepsContainer}>
        {steps.map((recipeStep, index) => (
          <RecipeStepItem
            key={recipeStep.id}
            inputId={inputId}
            inputName={inputName}
            onChange={onChange}
            onClickRemoveStep={onClickRemoveStep}
            orderIndex={index}
            dragIndex={dragIndex}
            onDragStart={handleDragStart}
            onDragEnter={handleDragEnter}
            onDragEnd={handleDragEnd}
          />
        ))}
      </div>
      <Stack size="ml" />
      <div className={styles.buttonWrapper}>
        <IconButton
          label="作り方を追加"
          iconName="plus"
          onClick={onClickAddStep}
        />
      </div>
    </div>
  );
};

export default RecipeStepList;
