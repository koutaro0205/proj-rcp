import React from 'react';

import Title from '@/components/atoms/Title';
import { Stack } from '@/components/layouts/Stack';

import styles from './styles';

type Ingredient = {
  id: number;
  ingredient_name: string;
  quantity: string;
};
export type Props = {
  servingSize: number;
  recipeIngredients: Ingredient[];
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
