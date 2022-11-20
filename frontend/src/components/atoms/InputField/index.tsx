import React from 'react';

import styles from './styles';

type Props = {
  name: string;
  type: string;
  id: string;
  accept?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

const InputField: React.FC<Props> = ({
  name,
  type,
  id,
  accept,
  onChange,
  value,
}) => {
  return (
    <input
      className={styles.input}
      type={type}
      id={id}
      name={name}
      accept={accept}
      onChange={onChange}
      value={value}
    />
  );
};

export default InputField;
