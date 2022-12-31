import { NextRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { User } from '@/@types/data';
import { HOME } from '@/common/constants/path';
import { CORRECT_USER } from '@/common/constants/toast';
import { EmptyObject } from '@/common/types';
import { selectCurrentUser } from '@/features/currentUser/selecters';
import { isCurrentUser } from '@/utils/match';
import { warn } from '@/utils/notifications';

type Props = {
  user: User | EmptyObject;
  router: NextRouter;
};

const useCorrectUser = ({ user, router }: Props): void => {
  const currentUser = useSelector(selectCurrentUser);
  useEffect(() => {
    if (!user || !isCurrentUser(user, currentUser)) {
      warn(CORRECT_USER.WARN);
      router.push(HOME);
    }
  }, [currentUser, router, router.isReady, user]);
};

export default useCorrectUser;
