import React from 'react';

import InputButton from '@/components/atoms/Button/InputButton';
import Explanation from '@/components/atoms/Explanation';
import Text from '@/components/atoms/Text';
import SubTitle from '@/components/atoms/Title/SubTitile';
import UserImage from '@/components/atoms/UserImage';
import FormItem from '@/components/molecules/FormItem';
import RenderErrors from '@/components/molecules/RenderErrors';
import { CurrentUser } from '@/features/currentUser/type';

import styles from './styles';

type Props = {
  currentUser: CurrentUser;
  formErrors: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

// HACK: バックエンド側でユーザー画像を設定する実装が完了し次第設定する
// FIXME: KOU-87 ユーザー編集機能を実装する
const EditUserImageSection: React.FC<Props> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  currentUser,
  formErrors,
  onChange,
  onSubmit,
}) => {
  return (
    <div>
      <SubTitle>プロフィール画像変更</SubTitle>
      <Explanation message="アプリ内で表示されるあなたのプロフィール画像です。自由に変更できます。" />
      <Text>現在のプロフィール画像</Text>
      <div className={styles.imageWrapper}>
        <UserImage size="large" />
      </div>
      <form onSubmit={onSubmit}>
        <RenderErrors formErrors={formErrors} />
        <FormItem
          label="画像を選択"
          type="file"
          id="image"
          name="image"
          accept="image/*,.png,.jpg,.jpeg,.gif"
          onChange={onChange}
        />
        <InputButton text="プロフィール画像を変更する" isCenter />
      </form>
    </div>
  );
};

export default EditUserImageSection;
