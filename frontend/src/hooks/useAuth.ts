import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { HOME } from '@/common/constants/path';
import { LOGIN, LOGOUT } from '@/common/constants/toast';
import { AppDispatch } from '@/common/store';
import { deleteCurrentUser } from '@/features/currentUser/slice';
import login, { LoginParams } from '@/services/auth/login';
import logout from '@/services/auth/logout';
import { error, success, warn } from '@/utils/notifications';

/**
 * 認証に関わる処理を定義
 * @handleLogin ログイン処理
 * @handleLogout ログアウト処理
 */

type Params = LoginParams;

const useAuth = (params?: Params) => {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();

  const loginInternal = useCallback(async (loginParams: LoginParams) => {
    const response = await login(loginParams);
    return response;
  }, []);

  const logoutInternal = useCallback(async () => {
    await logout();
  }, []);

  const handleLogin = useCallback(
    async (redirectTo?: string) => {
      if (params) {
        const response = await loginInternal(params);
        if (response.data.logged_in) {
          router.push(redirectTo || HOME);
          success(LOGIN.SUCCESS);
          return response.data;
        }
        if (response.data.status === 'unauthorized') {
          error(LOGIN.ERROR);
          return;
        }
        if (!response.data.activated) {
          router.push(HOME);
          warn(LOGIN.WARN);
        }
      }
    },
    [loginInternal, params, router]
  );

  const handleLogout = useCallback(() => {
    // eslint-disable-next-line no-alert
    const sure = window.confirm(LOGOUT.CONFIRM);
    if (sure) {
      logoutInternal();
      dispatch(deleteCurrentUser());
      router.push(HOME);
      success(LOGOUT.SUCCESS);
    }
  }, [dispatch, logoutInternal, router]);

  return {
    handleLogin,
    handleLogout,
  };
};

export default useAuth;
