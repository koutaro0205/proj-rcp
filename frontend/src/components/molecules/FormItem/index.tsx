import React from 'react';

import InputField from '@/components/atoms/TextField/InputField';

import styles from './styles';

export type Props = {
  label: string;
  id: string;
  type: string;
  name: string;
  accept?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

const FormItem: React.FC<Props> = ({
  label,
  id,
  type,
  name,
  accept,
  onChange,
  value = undefined,
}) => {
  return (
    <label className={styles.label} htmlFor={id}>
      {label}
      <InputField
        type={type}
        id={id}
        name={name}
        accept={accept}
        onChange={onChange}
        value={value}
      />
    </label>
  );
};

export default FormItem;
