import { useCallback, useEffect } from 'react';

import { User } from '@/@types/data';
import { HOME } from '@/common/constants/path';
import { CORRECT_USER } from '@/common/constants/toast';
import { EmptyObject } from '@/common/types';
import { isCurrentUser } from '@/utils/match';
import { warn } from '@/utils/notifications';

import { useAuthGaurd } from './useAuthGaurd';

/**
 * 編集権限のないユーザーのアクセスがあった場合、ホームへレンダリング
 * @user アクセス先のユーザー
 */

type Props = {
  user: User | EmptyObject;
};

const useEditableUser = ({ user }: Props) => {
  // ログインしていない場合
  const { currentUser, router } = useAuthGaurd();

  // ログインしていた場合
  const getEditableUser = useCallback(() => {
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
    getEditableUser();
  }, [getEditableUser]);

  return {
    currentUser,
  };
};

export default useEditableUser;
