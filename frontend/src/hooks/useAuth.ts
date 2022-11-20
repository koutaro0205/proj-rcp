import { useRouter } from 'next/router';
import { useCallback } from 'react';

import { ApiContext } from '@/@types/data';
import { HOME } from '@/common/constants/path';
import { ROOT_URL } from '@/common/constants/url';
import login, { LoginParams } from '@/services/auth/login';
import logout from '@/services/auth/logout';
import { error, success } from '@/utils/notifications';

const context: ApiContext = {
  apiRootUrl: ROOT_URL,
};

type Params = LoginParams;

const useAuth = (params?: Params) => {
  const router = useRouter();

  const loginInternal = async (loginParams: LoginParams) => {
    const response = await login(context, loginParams);
    return response;
  };

  const logoutInternal = async () => {
    await logout(context);
  };

  const handleLogin = useCallback(async () => {
    if (params) {
      const response = await loginInternal(params);
      if (response.data.logged_in) {
        router.push(HOME);
        success('ログインしました!');
        return response.data;
      }
      error('ユーザー認証に失敗しました。再入力してください。');
    }
  }, [params, router]);

  const handleLogout = useCallback(() => {
    // eslint-disable-next-line no-alert
    const sure = window.confirm('ログアウトしますか?');
    if (sure) {
      logoutInternal();
      router.push(HOME);
      success('ログアウトしました');
    }
  }, [router]);

  return {
    handleLogin,
    handleLogout,
  };
};

export default useAuth;
