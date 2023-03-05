import { cx } from '@emotion/css';
import React from 'react';

import { InputType } from '@/common/types/inputs';
import Checkbox from '@/components/atoms/Checkbox';
import { Stack } from '@/components/layouts/Stack';
import FormLabel from '@/components/molecules/FormItem/FormLabel';

import SelectInput from './SelectInput';
import { getStyles, FieldWidth } from './styles';
import { useFormItem } from './useFormItem';

type Option = {
  id: number;
  name: string;
};
type BaseProps = {
  fieldWidth?: FieldWidth;
  isRequired?: boolean;
  label?: string;
  name: string;
};

type TextProps = {
  fieldType?: 'textarea' | 'textField';
  id: string;
  type: InputType;
  // FIXME: 型を修正する。
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (...args: any) => void;
  value?: string;
  placeholder?: string;
  // Selectorの場合のProps
  options?: never;
  onChangeOption?: never;
  selectedOptionIndex?: never;
} & BaseProps;

type SelectorProps = {
  fieldType: 'selector';
  options: readonly Option[];
  onChangeOption: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectedOptionIndex: number;
  // textField, textareaの場合のProps
  id?: never;
  type?: never;
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
  onChangeOption,
  selectedOptionIndex,
}) => {
  const {
    getType,
    handleClick,
    isTypeOfPassword,
    textInputRef,
    textAreaRef,
    handleOnChange,
  } = useFormItem({
    onChange,
  });
  const styles = getStyles(fieldWidth);
  const getInputField = () => {
    if (fieldType === 'textarea') {
      return (
        <textarea
          ref={textAreaRef}
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
          onChangeOption={onChangeOption}
          selectedOptionIndex={selectedOptionIndex}
          name={name}
        />
      );
    }
    return (
      <input
        ref={textInputRef}
        className={styles.inputField}
        type={getType(type)}
        id={id}
        name={name}
        onChange={(e) => handleOnChange(e)}
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
                size="xs"
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
