import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { LOGIN_PATH } from '@/common/constants/path';
import { ACCESS_RESTRICTIONS } from '@/common/constants/toast';
import { useCurrentUser } from '@/features/currentUser/useCurrentUser';
import { info } from '@/utils/notifications';

export const useAuthGaurd = (): void => {
  const router = useRouter();
  const { isLoggedIn } = useCurrentUser();
  const { isReady, asPath } = router;

  useEffect(() => {
    if (isReady && isLoggedIn === false) {
      const currentPath = asPath;

      router.push({
        pathname: LOGIN_PATH,
        query: {
          redirectTo: currentPath,
        },
      });

      info(ACCESS_RESTRICTIONS.INFO);
    }
  }, [asPath, isLoggedIn, isReady, router]);
};
