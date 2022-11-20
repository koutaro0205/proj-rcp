import { PASSWORD_MIN_LENGHT } from '@/common/constants/characters';
import { REGEX } from '@/common/constants/regex';
import { LoginParams } from '@/services/auth/login';

export const validateLoginInfo = (user: LoginParams) => {
  const errors = [];

  // passwordのバリデーションは、リクエストを送る必要がある。

  if (user.email === '') {
    errors.push('メールアドレスを入力してください');
  }

  if (REGEX.test(user.email)) {
    errors.push('メールアドレスに不正な値が含まれています');
  }

  if (user.password === '') {
    errors.push('パスワードを入力してください');
  }

  if (user.password.length < PASSWORD_MIN_LENGHT) {
    errors.push('パスワードを6文字以上で入力してください');
  }

  return errors;
};
