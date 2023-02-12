import React from 'react';

import InputButton from '@/components/atoms/Button/InputButton';
import Explanation from '@/components/atoms/Explanation';
import Text from '@/components/atoms/Text';
import SubTitle from '@/components/atoms/Title/SubTitile';
import FormItem from '@/components/molecules/FormItem';
import RenderErrors from '@/components/molecules/RenderErrors';
import { CurrentUser } from '@/features/currentUser/type';
import { UserParams } from '@/services/users/types';

import styles from './styles';

type Props = {
  userInfo: UserParams;
  currentUser: CurrentUser;
  formErrors: string[];
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

// FIXME: KOU-87 ユーザー編集機能を実装する
const EditEmailSection: React.FC<Props> = ({
  userInfo,
  currentUser,
  formErrors,
  onChange,
  onSubmit,
}) => {
  return (
    <div>
      <SubTitle>メールアドレス変更</SubTitle>
      <Text lineHeight="l">現在のメールアドレス</Text>
      <Text backgroundColor="background">{currentUser.email}</Text>
      <Explanation message="新しいメールアドレスを入力して、変更を完了させてください。" />
      <form className={styles.form} onSubmit={onSubmit}>
        <RenderErrors formErrors={formErrors} />
        <FormItem
          label="メールアドレス"
          type="text"
          id="email"
          name="email"
          onChange={onChange}
          value={userInfo.email}
        />
        <InputButton
          value="メールアドレスを変更する"
          type="submit"
          isCenter
          disabled={currentUser.email === userInfo.email}
        />
      </form>
    </div>
  );
};

export default EditEmailSection;
