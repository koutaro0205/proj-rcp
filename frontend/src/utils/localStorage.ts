type SettedLoggedInStatusValue = 'true';

export const LOGIN_STATUS_KEY = 'isLoggedIn';
// ログイン状態を参照
export const LOCAL_STORAGE_LOGGED_IN_STATUS: boolean =
  typeof window !== 'undefined' &&
  localStorage.getItem(LOGIN_STATUS_KEY) === 'true';

export const setLoggedInStatusToLs = () => {
  localStorage.setItem(LOGIN_STATUS_KEY, 'true' as SettedLoggedInStatusValue);
};

export const removeLoggedInStatusToLs = () => {
  localStorage.removeItem(LOGIN_STATUS_KEY);
};
