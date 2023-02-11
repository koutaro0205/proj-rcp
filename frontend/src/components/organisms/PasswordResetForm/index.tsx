import React from 'react';

import InputButton from '@/components/atoms/Button/InputButton';
import FormItem from '@/components/molecules/FormItem';
import RenderErrors from '@/components/molecules/RenderErrors';

import styles from './styles';
import usePasswordResetForm from './usePasswordResetFrom';

const PasswordResetForm: React.FC = () => {
  const { formErrors, handleChange, handleSubmit } = usePasswordResetForm();
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

      <InputButton
        type="submit"
        value="メールを送信"
        isCenter
        _styles={styles.submitButton}
      />
    </form>
  );
};

export default PasswordResetForm;
