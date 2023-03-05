import { User } from '@/common/types/data';
import { UserParams } from '@/services/users/types';

import { validateEmail } from './email';
import { validatePassword } from './password';

type Args = {
  user: UserParams;
  users?: User[];
};

export const validateUser = ({ user, users }: Args) => {
  const errors = [];

  if (user.name === '') {
    errors.push('名前を入力してください');
  }

  const errorsByEmail = validateEmail({ email: user.email, users });
  const errorsByPassword = validatePassword(
    user.password,
    user.password_confirmation
  );
  errors.push(...errorsByEmail, ...errorsByPassword);

  return errors;
};
