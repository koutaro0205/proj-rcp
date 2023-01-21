import React from 'react';

import InputButton from '@/components/atoms/Button/InputButton';
import Explanation from '@/components/atoms/Explanation';
import Text from '@/components/atoms/Text';
import SubTitle from '@/components/atoms/Title/SubTitile';
import FormItem from '@/components/molecules/FormItem';
import RenderErrors from '@/components/molecules/RenderErrors';
import { CurrentUser } from '@/features/currentUser/type';

import styles from './styles';

type Props = {
  currentUser: CurrentUser;
};

// FIXME: KOU-87 ユーザー編集機能を実装する
const EditEmailSection: React.FC<Props> = ({ currentUser }) => {
  return (
    <div>
      <SubTitle>メールアドレス変更</SubTitle>
      <Text lineHeight="large">現在のメールアドレス</Text>
      <Text backgroundColor="background">{currentUser.email}</Text>
      <Explanation message="新しいメールアドレスを入力して、変更を完了させてください。" />
      <form className={styles.form}>
        <RenderErrors formErrors={[]} />
        <FormItem
          label="メールアドレス"
          type="text"
          id="email"
          name="email"
          onChange={() => {}}
          value={currentUser.email}
        />
        <InputButton text="メールアドレスを変更する" isCenter />
      </form>
    </div>
  );
};

export default EditEmailSection;
