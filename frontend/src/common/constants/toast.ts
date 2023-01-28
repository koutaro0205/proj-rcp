// ユーザーアクセス制限
export const ACCESS_RESTRICTIONS = {
  INFO: 'ログインが必要です。',
};

// ユーザー情報更新
export const UPDATE_USER = {
  SUCCESS: 'ユーザー情報を更新しました。',
  ERROR:
    'ユーザー情報の更新に失敗しました。通信状況を確認の上、再度お試しください。',
};

// ユーザー一覧
export const USERS = {
  ERROR: 'ユーザー一覧の取得に失敗しました。',
};

// アカウント有効化
export const ACCOUNT_ACTIVATIONS = {
  SUCCESS: 'アカウントの有効化が完了しました',
  WARN: '無効な有効化リンクです',
};

// パスワード再設定
export const PASSWORD_RESETS = {
  SUCCESS: 'パスワードの再設定が完了しました。',
  WARN: 'パスワード再設定用URLの有効期限が切れました。再度、設定し直してください。',
  INFO: '以下のフォームより新規パスワードを登録してください。',
  ERROR: 'トークンまたはメールアドレスが無効です',
  INVALID:
    '空文字列はパスワードとして登録できません。新しいパスワードを入力してください',
  TRANSMISSION_COMPLETED:
    'メールアドレス宛にパスワード有効化のリンクを送信しました。メールを確認し、パスワードの再設定を完了させてください。',
};

// サインアップ
export const SIGNUP = {
  INFO: 'ユーザー登録しました。ご登録のメールアドレスを確認し、アカウントの有効化を完了させてください。',
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

export const CORRECT_USER = {
  WARN: '権限がありません。',
};
