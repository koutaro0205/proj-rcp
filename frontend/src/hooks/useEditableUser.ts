import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

import { HOME, LOGIN_PATH } from '@/common/constants/path';
import { ACCESS_RESTRICTIONS, CORRECT_USER } from '@/common/constants/toast';
import { User } from '@/common/types/data';
import { useCurrentUser } from '@/features/currentUser/useCurrentUser';
import { LOCAL_STORAGE_LOGGED_IN_STATUS } from '@/utils/localStorage';
import { isCurrentUser } from '@/utils/match';
import { info, warn } from '@/utils/notifications';

/**
 * 編集権限のないユーザーのアクセスがあった場合、ホームへレンダリング
 * @user アクセス先のユーザー
 */

type Args = {
  user: User;
};

const useEditableUser = ({ user }: Args) => {
  const { currentUser } = useCurrentUser();
  const router = useRouter();
  const { isReady, asPath } = router;

  const authGaurd = useCallback(() => {
    // ログインしていない場合
    const currentPath = asPath;

    router.push({
      pathname: LOGIN_PATH,
      query: {
        redirectTo: currentPath,
      },
    });
  }, [asPath, router]);

  const getEditableUser = useCallback(() => {
    // ログインしていた場合
    if (
      currentUser &&
      currentUser.id &&
      user.id &&
      !isCurrentUser(user, currentUser)
    ) {
      warn(CORRECT_USER.WARN);
      router.push(HOME);
    }
  }, [currentUser, router, user]);

  useEffect(() => {
    if (isReady && !LOCAL_STORAGE_LOGGED_IN_STATUS) {
      info(ACCESS_RESTRICTIONS.INFO);
      authGaurd();
    } else {
      getEditableUser();
    }
  }, [authGaurd, getEditableUser, isReady]);

  return {
    currentUser,
  };
};

export default useEditableUser;
