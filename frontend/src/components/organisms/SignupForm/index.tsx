import React from 'react';

import InputButton from '@/components/atoms/InputButton';
import FormItem from '@/components/molecules/FormItem';

import styles from './styles';

const SignupForm: React.FC = () => {
  return (
    <div className={styles.container}>
      <form className={styles.formContainer}>
        {/* <form className="form" onSubmit={handleSubmit}> */}
        {/* {renderErrors()} */}

        <FormItem label="名前" type="text" id="name" name="name" />
        <FormItem label="メールアドレス" type="text" id="email" name="email" />
        <FormItem
          label="パスワード"
          type="password"
          id="password"
          name="password"
        />
        <FormItem
          label="パスワード確認"
          type="password"
          id="password_confirmation"
          name="password_confirmation"
        />
        <FormItem
          label="画像を選択"
          type="file"
          id="image"
          name="image"
          accept="image/*,.png,.jpg,.jpeg,.gif"
        />

        <div className={styles.submitButtonContainer}>
          <InputButton text="ユーザー登録" _styles={styles.submitButton} />
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
