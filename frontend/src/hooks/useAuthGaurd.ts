import { useRouter } from 'next/router';
import { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';

import { LOGIN_PATH } from '@/common/constants/path';
import { ACCESS_RESTRICTIONS } from '@/common/constants/toast';
import { selectCurrentUser } from '@/features/currentUser/selectors';
import { info } from '@/utils/notifications';

export const useAuthGaurd = () => {
  const router = useRouter();
  const currentUser = useSelector(selectCurrentUser);

  if (!currentUser) {
    const currentPath = router.asPath;

    router.push({
      pathname: LOGIN_PATH,
      query: {
        redirectTo: currentPath,
      },
    });
  }

  useLayoutEffect(() => {
    if (!currentUser) {
      info(ACCESS_RESTRICTIONS.INFO);
    }
  }, [currentUser, router]);

  return {
    currentUser,
    router,
  };
};
