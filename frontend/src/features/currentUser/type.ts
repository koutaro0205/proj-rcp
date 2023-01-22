import { User } from '@/@types/data';
import { EmptyObject } from '@/common/types';

export type CurrentUser = User | EmptyObject;

// 初期ステート
export type InitialState = {
  currentUser: CurrentUser;
  loggedIn: boolean;
};

// アクション
// NOTE: sessions#logged_in_user(controller)
export type UpdateLoginStatus = {
  logged_in: boolean;
  user: User;
};

export type UpdateCurrentUser = {
  user: User;
};
