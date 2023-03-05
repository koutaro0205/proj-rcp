import { useCallback, useRef, useState } from 'react';

import { InputType } from '@/common/types/inputs';
import { useInputType } from '@/hooks/useInputType';

type Args = {
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export const useFormItem = ({ onChange }: Args) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const textInputRef = useRef<HTMLInputElement>(null);

  // FIXME: 文字数制限処理は上で行う。
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [valueLength, setValueLength] = useState<number>(0);
  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange?.(event);
    const inputValue =
      textInputRef.current?.value || textAreaRef.current?.value;
    if (inputValue && !Number.isNaN(inputValue)) {
      setValueLength(inputValue.length);
    }
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
    handleClick,
    isTypeOfPassword,
    getType,
    textAreaRef,
    textInputRef,
    handleOnChange,
  };
};
