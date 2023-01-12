import { NextRouter } from 'next/router';
import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';

import { User } from '@/@types/data';
import { HOME } from '@/common/constants/path';
import { CORRECT_USER } from '@/common/constants/toast';
// import { AppDispatch } from '@/common/store';
import { EmptyObject } from '@/common/types';
// import { selectCurrentUser } from '@/features/currentUser/selecters';
// import { fetchCurrentUser } from '@/features/currentUser/slice';
import { isEmptyObject } from '@/utils/match';
import { warn } from '@/utils/notifications';

/**
 * 現在ユーザーが、アクセス先のユーザーと一致するかを判定
 * @user バックエンド側で、現在のユーザーと一致するかを判定し、一致すればユーザー情報を返す。
 * 一致しなければ、空の配列を返す。
 */

type Props = {
  user: User | EmptyObject;
  router: NextRouter;
};

const useCorrectUser = ({ user, router }: Props): void => {
  useEffect(() => {
    // NOTE: 権限のないユーザー（空の配列）だった場合
    if (isEmptyObject(user)) {
      warn(CORRECT_USER.WARN);
      router.push(HOME);
    }
  }, [router, router.isReady, user]);
};

export default useCorrectUser;
