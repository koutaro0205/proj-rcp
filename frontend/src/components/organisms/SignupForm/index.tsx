import React from 'react';

import InputButton from '@/components/atoms/Button/InputButton';
import FormItem from '@/components/molecules/FormItem';
import RenderErrors from '@/components/molecules/RenderErrors';
import useGetUserParams from '@/hooks/useGetUserParams';
import signup from '@/services/users/addUser';

import styles from './styles';

const SignupForm: React.FC = () => {
  const { userInfo, formErrors, handleChange, handleFileChange, handleSubmit } =
    useGetUserParams({ pattern: 'create', onSave: signup });

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <RenderErrors formErrors={formErrors} />

      <FormItem
        label="名前"
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        value={userInfo.name}
      />
      <FormItem
        label="メールアドレス"
        type="text"
        id="email"
        name="email"
        onChange={handleChange}
        value={userInfo.email}
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

      <InputButton text="ユーザー登録" _styles={styles.submitButton} isCenter />
    </form>
  );
};

export default SignupForm;
