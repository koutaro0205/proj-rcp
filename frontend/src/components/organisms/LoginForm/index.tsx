import React from 'react';

import { SIGNUP_PATH, PASSWORD_RESET_PATH } from '@/common/constants/path';
import InputButton from '@/components/atoms/InputButton';
import LinkText from '@/components/atoms/LinkText';
import Text from '@/components/atoms/Text';
import CheckItem from '@/components/molecules/CheckItem';
import FormItem from '@/components/molecules/FormItem';
import ValidationErrors from '@/components/molecules/ValidationErrors';
import { isEmptyArray } from '@/utils/array';

import styles from './styles';
import useLoginForm from './useLoginForm';

const LoginForm: React.FC = () => {
  const { formErrors, handleChange, handleSubmit } = useLoginForm();

  const renderErrors = () => {
    if (isEmptyArray(formErrors)) {
      return null;
    }

    return <ValidationErrors errors={formErrors} petterns="danger" />;
  };
  return (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        {renderErrors()}

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
          <Text _styles={styles.checkItemText}>
            次回から自動的にログインする
          </Text>
        </CheckItem>

        <InputButton text="ログイン" isCenter _styles={styles.submitButton} />

        <Text>
          ユーザー登録されていない方は
          <LinkText path={SIGNUP_PATH} _styles={styles.inlineText}>
            こちら
          </LinkText>
        </Text>

        <Text>
          パスワードをお忘れの方は
          <LinkText path={PASSWORD_RESET_PATH} _styles={styles.inlineText}>
            こちら
          </LinkText>
        </Text>
      </form>
    </div>
  );
};

export default LoginForm;
