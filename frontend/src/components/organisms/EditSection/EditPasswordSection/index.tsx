import React from 'react';

import InputButton from '@/components/atoms/Button/InputButton';
import Explanation from '@/components/atoms/Explanation';
import SubTitle from '@/components/atoms/Title/SubTitile';
import FormItem from '@/components/molecules/FormItem';
import RenderErrors from '@/components/molecules/RenderErrors';

type Props = {
  formErrors: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

// FIXME: KOU-87 ユーザー編集機能を実装する
const EditPasswordSection: React.FC<Props> = ({
  formErrors,
  onChange,
  onSubmit,
}) => {
  return (
    <div>
      <SubTitle>パスワード変更</SubTitle>
      <Explanation message="6文字以上の半角英数字で、パスワードの変更が可能です。" />
      <form onSubmit={onSubmit}>
        <RenderErrors formErrors={formErrors} />
        <FormItem
          label="パスワード"
          type="password"
          id="password"
          name="password"
          onChange={onChange}
        />
        <FormItem
          label="パスワード確認"
          type="password"
          id="password_confirmation"
          name="password_confirmation"
          onChange={onChange}
        />
        <InputButton text="パスワードを変更する" isCenter />
      </form>
    </div>
  );
};

export default EditPasswordSection;
