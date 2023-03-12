import React from 'react';

import { POSTED_RECIPE_INFO } from '@/common/constants/characters';
import Icon from '@/components/atoms/Icon';
import SortableIcon from '@/components/atoms/SortableIcon';
import { Queue } from '@/components/layouts/Queue';
import FormItem from '@/components/molecules/FormItem';
import { Ingredient } from '@/components/organisms/PostRecipeForm/usePostRecipeForm';

import { getStyles } from './styles';

type Props = {
  inputId: string;
  inputName: string;
  inputValue: Ingredient;
  orderIndex: number;
  dragIndex: number | null;
  onChangeName: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  onChangeQuantity: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  onClickRemoveIngredient: (orderIndex: number) => void;
  onDragStart: (orderIndex: number) => void;
  onDragEnter: (orderIndex: number) => void;
  onDragEnd: () => void;
};

const IngredientFormItem: React.FC<Props> = ({
  inputId,
  inputName,
  inputValue,
  orderIndex,
  dragIndex,
  onClickRemoveIngredient,
  onChangeName,
  onChangeQuantity,
  onDragStart,
  onDragEnter,
  onDragEnd,
}) => {
  const styles = getStyles(dragIndex === orderIndex);
  const ingredientNameId = `${inputId}-ingredient_name-${orderIndex}`;
  const ingredientQuauntityId = `${inputName}-quantity-${orderIndex}`;
  return (
    <div
      className={styles.container}
      draggable
      onDragStart={() => onDragStart(orderIndex)}
      onDragEnter={() => onDragEnter(orderIndex)}
      onDragOver={(e) => e.preventDefault()}
      onDragEnd={onDragEnd}
    >
      <div className={styles.sortableIconWrapper}>
        <SortableIcon />
      </div>
      <Queue size="m" />
      <div className={styles.content}>
        <FormItem
          id={ingredientNameId}
          name={ingredientNameId}
          type="text"
          onChange={onChangeName}
          fieldType="textField"
          placeholder="例) 玉ねぎ"
          value={inputValue?.ingredient_name}
          maxValueLength={POSTED_RECIPE_INFO.ingredient.name}
          isDisplayRemainingCount
        />
        <Queue size="m" />
        <FormItem
          id={ingredientQuauntityId}
          name={ingredientQuauntityId}
          type="text"
          onChange={onChangeQuantity}
          fieldType="textField"
          placeholder="例) 半切れ"
          value={inputValue?.quantity}
          maxValueLength={POSTED_RECIPE_INFO.ingredient.quantity}
          isDisplayRemainingCount
        />
      </div>
      <Queue size="m" />
      <div className={styles.iconContainer}>
        <Icon
          name="TRASH"
          size="xs"
          onClick={() => onClickRemoveIngredient(orderIndex)}
        />
      </div>
    </div>
  );
};

export default IngredientFormItem;
