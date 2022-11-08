// ユーザーデータ
export type User = {
  id: number;
  name: string;
  email: string;
  password_digest: string;
  created_at: string;
  updated_at: string;
};

// APIコンテキスト
export type ApiContext = {
  apiRootUrl: string;
};
