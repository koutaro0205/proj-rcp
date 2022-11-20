import React from 'react';

import InputButton from '@/components/atoms/InputButton';
import FormItem from '@/components/molecules/FormItem';
import ValidationErrors from '@/components/molecules/ValidationErrors';
import { isEmptyArray } from '@/utils/array';

import styles from './styles';
import useSignupForm from './useSignupForm';

const SignupForm: React.FC = () => {
  const {
    newUserInfo,
    formErrors,
    handleChange,
    handleFileChange,
    handleSubmit,
  } = useSignupForm();

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
          label="名前"
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={newUserInfo.name}
        />
        <FormItem
          label="メールアドレス"
          type="text"
          id="email"
          name="email"
          onChange={handleChange}
          value={newUserInfo.email}
        />
        <FormItem
          label="パスワード"
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
        />
        <FormItem
          label="パスワード確認"
          type="password"
          id="password_confirmation"
          name="password_confirmation"
          onChange={handleChange}
        />
        <FormItem
          label="画像を選択"
          type="file"
          id="image"
          name="image"
          accept="image/*,.png,.jpg,.jpeg,.gif"
          onChange={handleFileChange}
        />

        <div className={styles.submitButtonContainer}>
          <InputButton text="ユーザー登録" _styles={styles.submitButton} />
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
