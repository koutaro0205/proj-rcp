import { useCallback } from 'react';

import { DELETE_USER } from '@/common/constants/toast';
import { deleteUser } from '@/services/users/deleteUser';
import { success } from '@/utils/notifications';

export const useUsersList = () => {
  const handleDeleteUser = useCallback((id: number) => {
    // eslint-disable-next-line no-alert
    const sure = window.confirm(DELETE_USER.CONFIRM);
    if (sure) {
      deleteUser({ id });
      success(DELETE_USER.SUCCESS);
    }
  }, []);

  return { handleDeleteUser };
};
