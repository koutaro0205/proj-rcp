import React from 'react';

import InputButton from '@/components/atoms/Button/InputButton';
import Explanation from '@/components/atoms/Explanation';
import SubTitle from '@/components/atoms/Title/SubTitile';
import FormItem from '@/components/molecules/FormItem';
import RenderErrors from '@/components/molecules/RenderErrors';

const EditPasswordSection: React.FC = () => {
  return (
    <div>
      <SubTitle>パスワード変更</SubTitle>
      <Explanation message="6文字以上の半角英数字で、パスワードの変更が可能です。" />
      <form>
        <RenderErrors formErrors={[]} />
        <FormItem
          label="パスワード"
          type="password"
          id="password"
          name="password"
          onChange={() => {}}
        />
        <FormItem
          label="パスワード確認"
          type="password"
          id="password_confirmation"
          name="password_confirmation"
          onChange={() => {}}
        />
        <InputButton text="パスワードを変更する" isCenter />
      </form>
    </div>
  );
};

export default EditPasswordSection;
