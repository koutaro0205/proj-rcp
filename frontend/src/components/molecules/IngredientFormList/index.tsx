import React from 'react';

import IconButton from '@/components/atoms/Button/IconButton';
import { Stack } from '@/components/layouts/Stack';
import { PostIngredient } from '@/components/organisms/PostRecipeForm/usePostRecipeForm';

import IngredientFormItem from './IngredientFormItem';
import styles from './styles';
import { useIngredientList } from './useIngredientFormList';

type Props = {
  inputId: string;
  inputName: string;
  ingredieints: PostIngredient[];
  onClickAddIngredient: () => void;
  onClickRemoveIngredient: (index: number) => void;
  onChangeQuantity: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  onChangeName: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
};

const IngredientFormList: React.FC<Props> = ({
  inputId,
  inputName,
  onChangeName,
  onChangeQuantity,
  onClickAddIngredient,
  onClickRemoveIngredient,
  ingredieints,
}) => {
  const {
    ingredientsList,
    dragIndex,
    recipeParams,
    handleDragEnd,
    handleDragEnter,
    handleDragStart,
  } = useIngredientList(ingredieints);
  return (
    <div className={styles.container}>
      <div className={styles.stepsContainer}>
        {ingredientsList.map((_, index) => (
          <IngredientFormItem
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            inputId={inputId}
            inputName={inputName}
            inputValue={recipeParams.recipe_ingredients_attributes[index]}
            onChangeName={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeName(e, index)
            }
            onChangeQuantity={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeQuantity(e, index)
            }
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
          iconName="PLUS"
          onClick={onClickAddIngredient}
        />
      </div>
    </div>
  );
};

export default IngredientFormList;
