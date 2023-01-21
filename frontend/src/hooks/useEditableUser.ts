import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { User } from '@/@types/data';
import { HOME } from '@/common/constants/path';
import { CORRECT_USER } from '@/common/constants/toast';
import { EmptyObject } from '@/common/types';
import { selectCurrentUser } from '@/features/currentUser/selecters';
import { isCurrentUser } from '@/utils/match';
import { warn } from '@/utils/notifications';

/**
 * 編集権限のないユーザーのアクセスがあった場合、ホームへレンダリング
 * @user アクセス先のユーザー
 */

type Props = {
  user: User | EmptyObject;
};

const useEditableUser = ({ user }: Props): void => {
  const currentUser = useSelector(selectCurrentUser);
  const router = useRouter();
  const getEditableUser = useCallback(() => {
    if (currentUser.id && user.id && !isCurrentUser(user, currentUser)) {
      warn(CORRECT_USER.WARN);
      router.push(HOME);
    }
  }, [currentUser, router, user]);

  useEffect(() => {
    getEditableUser();
  }, [getEditableUser]);
};

export default useEditableUser;
