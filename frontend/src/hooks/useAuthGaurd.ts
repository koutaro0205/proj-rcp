import { useRouter } from 'next/router';
import { useCallback, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';

import { LOGIN_PATH } from '@/common/constants/path';
import { ACCESS_RESTRICTIONS } from '@/common/constants/toast';
import { selectCurrentUser } from '@/features/currentUser/selectors';
import { info } from '@/utils/notifications';

export const useAuthGaurd = () => {
  const router = useRouter();
  const currentUser = useSelector(selectCurrentUser);

  const authGaurd = useCallback(() => {
    if (!currentUser) {
      const currentPath = router.asPath;

      router.push({
        pathname: LOGIN_PATH,
        query: {
          redirectTo: currentPath,
        },
      });
      info(ACCESS_RESTRICTIONS.INFO);
    }
  }, [currentUser, router]);

  useLayoutEffect(() => {
    authGaurd();
  }, [router, currentUser, authGaurd]);

  return {
    currentUser,
    router,
  };
};
