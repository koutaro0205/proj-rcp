import { PASSWORD_MIN_LENGHT } from '@/common/constants/characters';
import { REGEX } from '@/common/constants/regex';

export const validateUserName = (userName: string) => {
  const errors = [];
  if (userName === '') {
    errors.push('名前を入力してください');
  }
  return errors;
};

export const validateEmail = (email: string) => {
  const errors = [];
  if (email === '') {
    errors.push('メールアドレスを入力してください');
  }

  if (REGEX.test(email)) {
    errors.push('メールアドレスに不正な値が含まれています');
  }
  return errors;
};

export const validatePassword = (
  password: string,
  passwordConfirmation: string
) => {
  const errors = [];
  // 更新時の未入力は変更なしとして判定
  if (password !== '' || passwordConfirmation !== '') {
    if (
      password.length < PASSWORD_MIN_LENGHT ||
      passwordConfirmation.length < PASSWORD_MIN_LENGHT
    ) {
      errors.push('パスワードを6文字以上で入力してください');
    }

    if (passwordConfirmation !== password) {
      errors.push('入力されたパスワードが一致しません');
    }
  }
  return errors;
};
