import { User } from '@/@types/data';
import { PASSWORD_MIN_LENGHT } from '@/common/constants/characters';
import { REGEX } from '@/common/constants/regex';
import { UserParams } from '@/services/users/addUser';

export const validateUser = (user: UserParams, users?: User[]) => {
  const errors = [];

  const existedUser = users?.find((e) => e.email === user.email);

  if (user.name === '') {
    errors.push('名前を入力してください');
  }

  if (user.email === '') {
    errors.push('メールアドレスを入力してください');
  }

  if (existedUser) {
    if (user.email === existedUser.email) {
      errors.push('入力されたメールアドレスは既に使われています');
    }
  }

  if (REGEX.test(user.email)) {
    errors.push('メールアドレスに不正な値が含まれています');
  }

  if (user.password === '' || user.password_confirmation === '') {
    errors.push('パスワードを入力してください');
  }

  if (
    user.password.length < PASSWORD_MIN_LENGHT ||
    user.password_confirmation.length < PASSWORD_MIN_LENGHT
  ) {
    errors.push('パスワードを6文字以上で入力してください');
  }

  if (user.password_confirmation !== user.password) {
    errors.push('入力されたパスワードが一致しません');
  }

  return errors;
};
