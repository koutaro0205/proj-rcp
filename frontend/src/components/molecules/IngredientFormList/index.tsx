import React from 'react';

import IconButton from '@/components/atoms/Button/IconButton';
import { Stack } from '@/components/layouts/Stack';

import IngredientFormItem from './IngredientFormItem';
import styles from './styles';
import { useIngredientList, IngredientItem } from './useIngredientFormList';

type Props = {
  inputId: string;
  inputName: string;
  // 材料のデータ（配列で管理）
  ingredieints: IngredientItem[];
  // setIngredieints: Dispatch<SetStateAction<RecipeStep[]>>;
  onClickAddIngredient: () => void;
  onClickRemoveIngredient: () => void;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const IngredientFormList: React.FC<Props> = ({
  inputId,
  inputName,
  onChange,
  onClickAddIngredient,
  onClickRemoveIngredient,
  ingredieints,
}) => {
  const {
    ingredientsList,
    dragIndex,
    handleDragEnd,
    handleDragEnter,
    handleDragStart,
  } = useIngredientList(ingredieints);
  return (
    <div className={styles.container}>
      <div className={styles.stepsContainer}>
        {ingredientsList.map((ingredient, index) => (
          <IngredientFormItem
            key={ingredient.id}
            inputId={inputId}
            inputName={inputName}
            onChange={onChange}
            onClickRemoveIngredient={onClickRemoveIngredient}
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
          label="材料を追加"
          iconName="plus"
          onClick={onClickAddIngredient}
        />
      </div>
    </div>
  );
};

export default IngredientFormList;
