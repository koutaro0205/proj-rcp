import { User } from '@/@types/data';
import { REGEX } from '@/common/constants/regex';

type Args = {
  email: string;
  users?: User[];
};

export const validateEmail = ({ email, users }: Args) => {
  const errors = [];

  const existedUser = users?.find((e) => e.email === email);

  if (email === '') {
    errors.push('メールアドレスを入力してください');
  }

  if (existedUser) {
    if (email === existedUser.email) {
      errors.push('入力されたメールアドレスは既に使われています');
    }
  }

  if (REGEX.test(email)) {
    errors.push('メールアドレスに不正な値が含まれています');
  }

  return errors;
};
