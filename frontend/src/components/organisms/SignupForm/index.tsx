import React from 'react';

import InputButton from '@/components/atoms/Button/InputButton';
import { Stack } from '@/components/layouts/Stack';
import FormItem from '@/components/molecules/FormItem';
import InputImage from '@/components/molecules/InputImage';
import RenderErrors from '@/components/molecules/RenderErrors';

import styles from './styles';
import { useSignupForm } from './useSignupForm';

const SignupForm: React.FC = () => {
  const {
    userInfo,
    formErrors,
    inputRef,
    imageUrl,
    file,
    handleChange,
    handleFileChange,
    handleResetFile,
    handleClick,
    handleSubmit,
  } = useSignupForm();

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
      <InputImage
        inputRef={inputRef}
        uploadButtonLabel="画像をアップロード"
        imageUrl={imageUrl}
        file={file}
        onChange={handleFileChange}
        onClickResetFile={handleResetFile}
        onClickUploadFile={handleClick}
      />
      <Stack size="xxl" />
      <InputButton
        value="ユーザー登録"
        type="submit"
        _styles={styles.submitButton}
        isCenter
      />
    </form>
  );
};

export default SignupForm;
