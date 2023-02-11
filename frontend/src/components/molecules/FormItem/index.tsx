import React from 'react';

import Checkbox from '@/components/atoms/Checkbox';
import { Stack } from '@/components/layouts/Stack';
import { useInputType } from '@/hooks/useInputType';

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
  const { handleClick, isTypeOfPassword } = useInputType();
  const getType = (t: string) => {
    if (t === 'password') {
      return isTypeOfPassword ? 'password' : 'text';
    }
    return type;
  };

  return (
    <div className={styles.container}>
      <div className={styles.labelContainer}>
        <label htmlFor={id}>{label}</label>
        {type === 'password' && (
          // typeがpasswordの時はチェックがついていない(false)
          <Checkbox
            size="m"
            label="パスワードを表示"
            onClick={handleClick}
            isChecked={!isTypeOfPassword}
          />
        )}
      </div>
      <input
        className={styles.inputField}
        type={getType(type)}
        id={id}
        name={name}
        accept={accept}
        onChange={onChange}
        value={value}
      />
      <Stack size="ml" />
    </div>
  );
};

export default FormItem;
