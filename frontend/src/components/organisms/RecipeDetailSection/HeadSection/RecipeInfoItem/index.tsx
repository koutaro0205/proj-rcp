import React from 'react';

import { Queue } from '@/components/layouts/Queue';

import styles from './styles';

type Props = {
  label: string;
  itemValue: string;
};

const RecipeInfoItem: React.FC<Props> = ({ label, itemValue }) => {
  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>
      <Queue size="m" />
      <span className={styles.itemValue}>{itemValue}</span>
    </div>
  );
};

export default RecipeInfoItem;
