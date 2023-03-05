import { RootState } from '@/common/store';

// NOTE: storeから値を取る際の命名：「select ~」
export const selectCurrentUser = (state: RootState) =>
  state.currentUser.currentUser;
export const selectIsLoggedIn = (state: RootState) =>
  state.currentUser.loggedIn;
