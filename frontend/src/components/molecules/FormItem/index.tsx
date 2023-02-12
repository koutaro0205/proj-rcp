import { cx } from '@emotion/css';
import React from 'react';

import { InputType } from '@/common/types/inputs';
import Checkbox from '@/components/atoms/Checkbox';
import { Stack } from '@/components/layouts/Stack';
import FormLabel from '@/components/molecules/FormItem/FormLabel';
import { useInputType } from '@/hooks/useInputType';

import { getStyles, FieldWidth } from './styles';

export type Props = {
  label?: string;
  id: string;
  type: InputType;
  name: string;
  accept?: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value?: string;
  isRequired?: boolean;
  placeholder?: string;
  fieldType?: 'textarea' | 'textField';
  fieldWidth?: FieldWidth;
};

const FormItem: React.FC<Props> = ({
  label,
  id,
  type,
  name,
  accept,
  onChange,
  value = undefined,
  isRequired = false,
  placeholder = '',
  fieldType = 'textField',
  fieldWidth = 'fluid',
}) => {
  const styles = getStyles(fieldWidth);
  const { handleClick, isTypeOfPassword } = useInputType();
  const getType = (t: InputType) => {
    if (t === 'password') {
      return isTypeOfPassword ? 'password' : 'text';
    }
    return type;
  };
  const getInputField = () => {
    if (fieldType === 'textField') {
      return (
        <input
          className={styles.inputField}
          type={getType(type)}
          id={id}
          name={name}
          accept={accept}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      );
    }
    return (
      <textarea
        className={cx(styles.inputField, styles.textarea)}
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    );
  };

  return (
    <div className={styles.container}>
      {!label ? null : (
        <>
          <div className={styles.labelContainer}>
            {label && (
              <FormLabel htmlFor={id} isRequired={isRequired}>
                {label}
              </FormLabel>
            )}
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
          <Stack size="xxs" />
        </>
      )}
      {getInputField()}
      <Stack size="ml" />
    </div>
  );
};

export default FormItem;
