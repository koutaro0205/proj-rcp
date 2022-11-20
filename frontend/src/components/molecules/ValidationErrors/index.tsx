import React from 'react';

import Alert from '@/components/atoms/Alert';
import { AlertPatterns } from '@/components/atoms/Alert/styles';

import styles from './styles';

type Props = {
  errors: string[];
  petterns: AlertPatterns;
};

const ValidationErrors: React.FC<Props> = ({ errors, petterns }) => {
  return (
    <div className={styles.container}>
      <Alert errors={errors} petterns={petterns} />
      <ul className={styles.errorMessagesContainer}>
        {errors.map((error) => (
          <li key={error} className={styles.errorMessage}>
            {error}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ValidationErrors;
