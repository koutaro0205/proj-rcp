// アカウント有効化
export const ACCOUNT_ACTIVATIONS = {
  SUCCESS: 'アカウントの有効化が完了しました',
  WARN: '無効な有効化リンクです',
};

// サインアップ
export const SIGNUP = {
  SUCCESS:
    'ユーザー登録しました。ご登録のメールアドレスを確認し、アカウントの有効化を完了させてください。',
};

// ログイン
export const LOGIN = {
  SUCCESS: 'ログインしました!',
  ERROR:
    '認証に失敗しました。正しいメールアドレス・パスワードを入力し直すか、新規登録を行ってください。',
  WARN: 'アカウントが有効化されていません。メールに記載されている有効化リンクを確認して下さい。',
};

// ログアウト
export const LOGOUT = {
  SUCCESS: 'ログアウトしました',
  CONFIRM: 'ログアウトしますか？',
};
