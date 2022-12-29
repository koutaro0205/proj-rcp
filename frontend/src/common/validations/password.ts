import { PASSWORD_MIN_LENGHT } from '@/common/constants/characters';

export const validatePassword = (
  password: string,
  password_confirmation: string
) => {
  const errors = [];

  if (password === '' || password_confirmation === '') {
    errors.push('パスワードを入力してください');
  }

  if (
    password.length < PASSWORD_MIN_LENGHT ||
    password_confirmation.length < PASSWORD_MIN_LENGHT
  ) {
    errors.push('パスワードを6文字以上で入力してください');
  }

  if (password_confirmation !== password) {
    errors.push('入力されたパスワードが一致しません');
  }

  return errors;
};
