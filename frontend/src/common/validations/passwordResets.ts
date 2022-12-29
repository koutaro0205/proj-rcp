import { User } from '@/@types/data';
import { REGEX } from '@/common/constants/regex';

type Args = {
  email: string;
  users?: User[];
};

// FIXME: 命名の変更
export const validatePasswordResets = ({ email, users }: Args) => {
  const errors = [];

  const existedUser = users?.find((e) => e.email === email);

  if (email === '') {
    errors.push('メールアドレスを入力してください');
  }

  if (!existedUser) {
    errors.push('入力内容と一致するメールアドレスは存在しません。');
  }

  if (REGEX.test(email)) {
    errors.push('メールアドレスに不正な値が含まれています');
  }

  return errors;
};
