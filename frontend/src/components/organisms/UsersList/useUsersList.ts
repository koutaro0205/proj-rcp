import { useCallback, useState } from 'react';

import { DELETE_USER } from '@/common/constants/toast';
import { deleteUser } from '@/services/users/deleteUser';
import { success } from '@/utils/notifications';

export const useUsersList = () => {
  const [isFollowing, setIsFollowing] = useState<boolean>(false);
  // HACK: 処理を追加する(DBを見に行って保存されて入ればsetIsFollowingする関数をuseEffectの中で実行する。)
  const handleClickToggleFollow = useCallback(() => {
    setIsFollowing((prev) => !prev);
  }, []);

  const handleDeleteUser = useCallback((id: number) => {
    // eslint-disable-next-line no-alert
    const sure = window.confirm(DELETE_USER.CONFIRM);
    if (sure) {
      deleteUser({ id });
      success(DELETE_USER.SUCCESS);
    }
  }, []);

  return { handleDeleteUser, handleClickToggleFollow, isFollowing };
};
