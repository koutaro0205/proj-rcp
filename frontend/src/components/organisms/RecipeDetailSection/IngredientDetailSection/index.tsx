import React from 'react';

import { Recipe } from '@/common/types/data';
import Title from '@/components/atoms/Title';
import { Stack } from '@/components/layouts/Stack';

import styles from './styles';

export type Props = {
  servingSize: Recipe['serving_size'];
  recipeIngredients: Recipe['recipe_ingredients'];
};

const IngredientDetailSection: React.FC<Props> = ({
  servingSize,
  recipeIngredients,
}) => {
  return (
    <div className={styles.container}>
      <Title size="ml" color="black">{`材料 (${servingSize}人分)`}</Title>
      <Stack size="m" />
      <ul className={styles.ingredientList}>
        {recipeIngredients.map((ingredient) => (
          <li key={ingredient?.id} className={styles.ingredientItem}>
            <div>{ingredient?.ingredient_name}</div>
            <div>{ingredient?.quantity}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientDetailSection;
