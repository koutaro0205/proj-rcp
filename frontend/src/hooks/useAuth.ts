import { useRouter } from 'next/router';
import { useCallback } from 'react';

import { ApiContext } from '@/@types/data';
import { HOME } from '@/common/constants/path';
import { ROOT_URL } from '@/common/constants/url';
import login, { LoginParams } from '@/services/auth/login';
import logout from '@/services/auth/logout';
import { success } from '@/utils/notifications';

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

  const handleLogout = useCallback(() => {
    // eslint-disable-next-line no-alert
    const sure = window.confirm('ログアウトしますか?');
    if (sure) {
      logoutInternal();
      router.push(HOME);
      success('ログアウトしました');
    }
  }, [router]);

  const handleLogin = useCallback(() => {
    if (params) {
      router.push(HOME);
      success('ログインしました!');
      return loginInternal(params);
    }
  }, [params, router]);

  return {
    handleLogin,
    handleLogout,
  };
};

export default useAuth;
