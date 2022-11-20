import { LoginParams } from '@/services/auth/login';

export const validateLoginInfo = (user: LoginParams) => {
  const errors = [];

  // 「有効なメールアドレスを登録してください」用
  // eslint-disable-next-line prefer-regex-literals
  const regex = new RegExp(/A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+z/i);

  // 登録済みのuser一覧を取得してreduxで保持
  // 一致するユーザー情報が存在するかを判定
  // （なければ、バリデーションエラー）
  // const existedUser = users.find((e) => e.email === user.email);

  // passwordのバリデーションは、リクエストを送る必要がある。

  if (user.email === '') {
    errors.push('メールアドレスを入力してください');
  }

  if (user.password === '') {
    errors.push('パスワードを入力してください');
  }

  return errors;
};
