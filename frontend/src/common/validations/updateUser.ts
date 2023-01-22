import { REGEX } from '@/common/constants/regex';
import { UserParams } from '@/services/users/types';

type Args = {
  user: UserParams;
};

export const validateUpdatedUser = ({ user }: Args) => {
  const errors = [];

  if (user.name === '') {
    errors.push('名前を入力してください');
  }

  if (user.email === '') {
    errors.push('メールアドレスを入力してください');
  }

  if (REGEX.test(user.email)) {
    errors.push('メールアドレスに不正な値が含まれています');
  }

  return errors;
};
