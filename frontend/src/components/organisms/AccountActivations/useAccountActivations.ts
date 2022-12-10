import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { HOME } from '@/common/constants/path';
import { AppDispatch } from '@/common/store';
import { updateCurrentUser } from '@/features/currentUser/slice';
import useGetQueryParameters from '@/hooks/useGetQueryParameters';
import activate from '@/services/users/accountActivations/activateUser';
import { success, warn } from '@/utils/notifications';

const useAccountActivations = () => {
  const { params } = useGetQueryParameters();

  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();

  const handleActivate = useCallback(async () => {
    if (params) {
      const { token, email } = params;
      const data = await activate({ token, email });

      if (data.status === 'ok') {
        dispatch(updateCurrentUser(data));
        success('アカウントの有効化が完了しました');
        router.push(HOME);
      }
      if (data.status === 'unprocessable_entity') {
        warn('無効な有効化リンクです');
      }
    }
  }, [dispatch, params, router]);

  return {
    handleActivate,
  };
};

export default useAccountActivations;
