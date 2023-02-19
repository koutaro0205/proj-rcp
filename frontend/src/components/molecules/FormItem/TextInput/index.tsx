import React from 'react';

import { InputType } from '@/common/types/inputs';

type Props = {
  id: string;
  type: InputType;
  name: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value?: string;
  placeholder?: string;
  className: string;
};

// FIXME: 切り分ける必要がなければ削除する。
const TextInput: React.FC<Props> = ({
  id,
  type,
  name,
  onChange,
  value,
  placeholder,
  className,
}) => {
  return (
    <input
      className={className}
      type={type}
      id={id}
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
