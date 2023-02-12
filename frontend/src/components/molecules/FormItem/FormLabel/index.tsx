import React from 'react';

import Label from '@/components/atoms/Label';
import { Queue } from '@/components/layouts/Queue';

import styles from './styles';

type Props = {
  children: string;
  htmlFor: string;
  isRequired?: boolean;
};

const FormLabel: React.FC<Props> = ({ children, htmlFor, isRequired }) => {
  return (
    <label className={styles.container} htmlFor={htmlFor}>
      {children}
      {isRequired && (
        <>
          <Queue size="xxs" />
          <Label pattern="required" size="xxs" />
        </>
      )}
    </label>
  );
};

export default FormLabel;
