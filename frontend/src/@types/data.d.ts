// usersテーブル
export type User = {
  id: number;
  name: string;
  email: string;
  password_digest: string;
  created_at: string;
  updated_at: string;
  remember_digest: string | null;
  reset_digest: string | null;
  reset_sent_at: string | null;
  activation_digest: string | null;
  activated: boolean | null;
  activated_at: string | null;
  admin: boolean;
  image_url?: string | null;
};
