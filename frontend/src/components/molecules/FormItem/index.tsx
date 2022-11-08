import React from 'react';

import InputField from '@/components/atoms/InputField';

import styles from './styles';

export type Props = {
  label: string;
  id: string;
  type: string;
  name: string;
  accept?: string;
};

const FormItem: React.FC<Props> = ({ label, id, type, name, accept }) => {
  return (
    <label className={styles.label} htmlFor={id}>
      {label}
      <InputField type={type} id={id} name={name} accept={accept} />
    </label>
  );
};

export default FormItem;
