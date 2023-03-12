import { cx } from '@emotion/css';
import React from 'react';

import { InputType } from '@/common/types/inputs';
import Checkbox from '@/components/atoms/Checkbox';
import { Stack } from '@/components/layouts/Stack';
import FormLabel from '@/components/molecules/FormItem/FormLabel';

import SelectInput, { Option } from './SelectInput';
import { getStyles, FieldWidth } from './styles';
import { useFormItem } from './useFormItem';

const DEFAULT_VALUE_LENGTH = 25;

type BaseProps = {
  fieldWidth?: FieldWidth;
  isRequired?: boolean;
  label?: string;
  name: string;
};

type TextProps = {
  // FIXME: 型を修正する。
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (...args: any) => void;
  fieldType?: 'textarea' | 'textField';
  id: string;
  type: InputType;
  value?: string;
  placeholder?: string;
  maxValueLength?: number;
  isDisplayRemainingCount?: boolean;
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
  maxValueLength?: never;
  isDisplayRemainingCount?: never;
} & BaseProps;

export type Props = TextProps | SelectorProps;

const FormItem: React.FC<Props> = ({
  // BaseProps
  label,
  fieldWidth = 'fluid',
  name,
  isRequired = false,
  fieldType,
  maxValueLength = DEFAULT_VALUE_LENGTH,
  // TextProps
  id,
  type,
  onChange,
  value,
  placeholder,
  isDisplayRemainingCount = false,
  // SelectorProps
  options,
  onChangeOption,
  selectedOptionIndex,
}) => {
  const {
    remainingCount,
    getType,
    handleClick,
    isTypeOfPassword,
    textInputRef,
    textAreaRef,
    handleOnChange,
  } = useFormItem({
    onChange,
    maxValueLength,
  });
  const isOverLimit = remainingCount <= 0;
  const styles = getStyles(fieldWidth, isOverLimit);

  const getRmainingCountText = () => {
    return (
      <>
        <Stack size="xxs" />
        {isDisplayRemainingCount && (
          <span className={styles.remainingCountText}>
            残り{remainingCount}文字
            {isOverLimit && ` (${maxValueLength}文字以内で入力してください。)`}
          </span>
        )}
      </>
    );
  };

  const getInputField = () => {
    if (fieldType === 'textarea') {
      return (
        <>
          <textarea
            ref={textAreaRef}
            className={cx(styles.inputField, styles.textarea)}
            id={id}
            name={name}
            onChange={(e) => handleOnChange(e)}
            value={value}
            placeholder={placeholder}
          />
          {getRmainingCountText()}
        </>
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
      <>
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
        {getRmainingCountText()}
      </>
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
