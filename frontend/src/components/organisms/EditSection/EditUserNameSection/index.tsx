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
const EditUserNameSection: React.FC<Props> = ({ currentUser }) => {
  return (
    <div>
      <SubTitle>ユーザー名変更</SubTitle>
      <Explanation message="アプリ内で表示されるあなたのユーザー名です。自由に変更できます。" />
      <div className={styles.textWrapper}>
        <Text backgroundColor="background">{currentUser.name}</Text>
      </div>
      <form>
        <RenderErrors formErrors={[]} />
        <FormItem
          label="名前"
          type="text"
          id="name"
          name="name"
          onChange={() => {}}
          value={currentUser.name}
        />
        <InputButton text="ユーザー名を変更する" isCenter />
      </form>
    </div>
  );
};

export default EditUserNameSection;
