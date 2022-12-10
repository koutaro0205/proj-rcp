import React from 'react';

import InputButton from '@/components/atoms/Button/InputButton';
import Text from '@/components/atoms/Text';
import SubTitle from '@/components/atoms/Title/SubTitile';
import FormItem from '@/components/molecules/FormItem';
import RenderErrors from '@/components/molecules/RenderErrors';

import styles from './styles';
import usePasswordResetForm from './usePasswordResetFrom';

const PasswordResetForm: React.FC = () => {
  const { formErrors, handleChange, handleSubmit } = usePasswordResetForm();
  return (
    <div className={styles.container}>
      <SubTitle>パスワードをお忘れの方</SubTitle>
      <Text _styles={styles.text}>
        パスワードの再設定を行います。
        <br />
        登録した覚えのあるメールアドレスを入力してください。
      </Text>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <RenderErrors formErrors={formErrors} />

        <FormItem
          label="メールアドレス"
          type="text"
          id="email"
          name="email"
          onChange={handleChange}
        />

        <InputButton
          text="メールを送信"
          isCenter
          _styles={styles.submitButton}
        />
      </form>
    </div>
  );
};

export default PasswordResetForm;
