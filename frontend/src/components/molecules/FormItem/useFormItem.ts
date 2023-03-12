import { useCallback, useRef, useState } from 'react';

import { InputType } from '@/common/types/inputs';
import { useInputType } from '@/hooks/useInputType';

type Args = {
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  maxValueLength: number;
};

export const useFormItem = ({ onChange, maxValueLength }: Args) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const textInputRef = useRef<HTMLInputElement>(null);

  const [remainingCount, setRemainingCount] = useState<number>(maxValueLength);

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange?.(event);
    const inputValue =
      textInputRef.current?.value || textAreaRef.current?.value;
    if (inputValue && !Number.isNaN(inputValue)) {
      const value =
        maxValueLength - inputValue.length > 0
          ? maxValueLength - inputValue.length
          : 0;
      setRemainingCount(value);
      return;
    }
    setRemainingCount(maxValueLength);
  };

  const { handleClick, isTypeOfPassword } = useInputType();

  const getType = useCallback(
    (type: InputType) => {
      if (type === 'password') {
        return isTypeOfPassword ? 'password' : 'text';
      }
      return type;
    },
    [isTypeOfPassword]
  );

  return {
    remainingCount,
    handleClick,
    isTypeOfPassword,
    getType,
    textAreaRef,
    textInputRef,
    handleOnChange,
  };
};
