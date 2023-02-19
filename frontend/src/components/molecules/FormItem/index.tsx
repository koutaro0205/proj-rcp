import { cx } from '@emotion/css';
import React from 'react';

import { InputType } from '@/common/types/inputs';
import Checkbox from '@/components/atoms/Checkbox';
import { Stack } from '@/components/layouts/Stack';
import FormLabel from '@/components/molecules/FormItem/FormLabel';
import { useInputType } from '@/hooks/useInputType';

import SelectInput from './SelectInput';
import { getStyles, FieldWidth } from './styles';

type Option = {
  id: number;
  name: string;
};
type BaseProps = {
  fieldWidth?: FieldWidth;
  isRequired?: boolean;
  label?: string;
};

type TextProps = {
  fieldType?: 'textarea' | 'textField';
  id: string;
  type: InputType;
  name: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value?: string;
  placeholder?: string;
  // Selectorの場合のProps
  options?: never;
  onOptionChange?: never;
  selectedOption?: never;
} & BaseProps;

type SelectorProps = {
  fieldType: 'selector';
  options: Option[];
  onOptionChange: () => void;
  selectedOption: number;
  // textField, textareaの場合のProps
  id?: never;
  type?: never;
  name?: never;
  onChange?: never;
  value?: never;
  placeholder?: never;
} & BaseProps;

export type Props = TextProps | SelectorProps;

const FormItem: React.FC<Props> = ({
  label,
  id,
  type,
  name,
  onChange,
  value,
  isRequired = false,
  placeholder,
  fieldType,
  fieldWidth = 'fluid',
  options,
  onOptionChange,
  selectedOption,
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
    if (fieldType === 'textarea') {
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
    }

    if (fieldType === 'selector') {
      return (
        <SelectInput
          options={options}
          onOptionChange={onOptionChange}
          selectedOption={selectedOption}
        />
      );
    }
    return (
      <input
        className={styles.inputField}
        type={getType(type)}
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
          <Stack size="xs" />
        </>
      )}
      {getInputField()}
    </div>
  );
};

export default FormItem;
