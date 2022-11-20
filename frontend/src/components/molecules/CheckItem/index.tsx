import React from 'react';

import Checkbox from '@/components/atoms/Checkbox';

import styles from './styles';

export type Props = {
  children: React.ReactNode;
  id: string;
  type: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckItem: React.FC<Props> = ({ children, id, type, name, onChange }) => {
  return (
    <label htmlFor={id} className={styles.checkbox}>
      <Checkbox type={type} id={id} name={name} onChange={onChange} />
      {children}
    </label>
  );
};

export default CheckItem;
