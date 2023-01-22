import { User } from '@/@types/data';
import { StatusCode } from '@/common/types';

export type UserParams = {
  /**
   * ユーザー名
   */
  name: string;
  /**
   * メールアドレス
   */
  email: string;
  /**
   * パスワード
   */
  password: string;
  /**
   * パスワード確認
   */
  password_confirmation: string;
  /**
   * ユーザー画像
   */
  image?: {
    data: string | ArrayBuffer | null;
    filename: string;
  };
};

export type NormalResponse = {
  status: Extract<StatusCode, 'ok'>;
  user: User;
};

export type InvalidResponse = {
  status: Extract<StatusCode, 'forbidden'>; //
};

export type ErrorResponse = {
  status: Extract<StatusCode, 'unprocessable_entity'>;
};

export type UserCreateOrUpdateResponse = NormalResponse & ErrorResponse;
