import { User } from '@/common/types/data';

export type CurrentUser = User;

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
