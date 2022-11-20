import { UserParams } from '@/services/users/addUser';

const MIN_LENGTH = 6;

export const validateUser = (user: UserParams) => {
  const errors = [];
  // eslint-disable-next-line prefer-regex-literals
  const regex = new RegExp(/A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+z/i);
  // const existedUser = users.find((e) => e.email === user.email);

  if (user.name === '') {
    errors.push('名前を入力してください');
  }

  if (user.email === '') {
    errors.push('メールアドレスを入力してください');
  }

  if (regex.test(user.email)) {
    errors.push('メールアドレスに不正な値が含まれています');
  }

  if (user.password === '' || user.password_confirmation === '') {
    errors.push('パスワードを入力してください');
  }

  if (
    user.password.length < MIN_LENGTH ||
    user.password_confirmation.length < MIN_LENGTH
  ) {
    errors.push('パスワードを6文字以上で入力してください');
  }

  if (user.password_confirmation !== user.password) {
    errors.push('入力されたパスワードが一致しません');
  }

  return errors;
};
