import React from 'react';

import { SIGNUP_PATH, PASSWORD_RESETS_PATH } from '@/common/constants/path';
import InputButton from '@/components/atoms/Button/InputButton';
import LinkText from '@/components/atoms/LinkText';
import Text from '@/components/atoms/Text';
import CheckItem from '@/components/molecules/CheckItem';
import FormItem from '@/components/molecules/FormItem';
import RenderErrors from '@/components/molecules/RenderErrors';

import styles from './styles';
import useLoginForm from './useLoginForm';

const LoginForm: React.FC = () => {
  const { formErrors, handleChange, handleSubmit } = useLoginForm();

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <RenderErrors formErrors={formErrors} />

      <FormItem
        label="メールアドレス"
        type="text"
        id="email"
        name="email"
        onChange={handleChange}
      />
      <FormItem
        label="パスワード"
        type="password"
        id="password"
        name="password"
        onChange={handleChange}
      />

      <CheckItem
        type="checkbox"
        name="remember_me"
        id="remember_me"
        onChange={handleChange}
      >
        <Text _styles={styles.checkItemText}>次回から自動的にログインする</Text>
      </CheckItem>

      <InputButton text="ログイン" isCenter _styles={styles.submitButton} />

      <Text textAlign="center">
        ユーザー登録されていない方は
        <LinkText path={SIGNUP_PATH} _styles={styles.inlineText}>
          こちら
        </LinkText>
      </Text>

      <Text textAlign="center">
        パスワードをお忘れの方は
        <LinkText path={PASSWORD_RESETS_PATH} _styles={styles.inlineText}>
          こちら
        </LinkText>
      </Text>
    </form>
  );
};

export default LoginForm;
