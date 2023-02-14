import React from 'react';

import InputButton from '@/components/atoms/Button/InputButton';
import { Stack } from '@/components/layouts/Stack';
import FormItem from '@/components/molecules/FormItem';
import RenderErrors from '@/components/molecules/RenderErrors';

import styles from './styles';
import useEditPassword from './useEditPassword';

const EditPasswordForm: React.FC = () => {
  const { formErrors, handleChange, handleSubmit } = useEditPassword();
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <RenderErrors formErrors={formErrors} />

      <FormItem
        label="パスワード"
        type="password"
        id="password"
        name="password"
        onChange={handleChange}
      />
      <Stack size="ml" />
      <FormItem
        label="パスワード確認"
        type="password"
        id="password_confirmation"
        name="password_confirmation"
        onChange={handleChange}
      />
      <Stack size="ml" />

      <InputButton type="submit" value="再設定する" isCenter />
    </form>
  );
};

export default EditPasswordForm;
