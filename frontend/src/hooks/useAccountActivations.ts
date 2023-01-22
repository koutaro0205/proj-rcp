import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { HOME } from '@/common/constants/path';
import { ACCOUNT_ACTIVATIONS } from '@/common/constants/toast';
import { AppDispatch } from '@/common/store';
import { updateLoginStatus } from '@/features/currentUser/slice';
import useGetQueryParameters from '@/hooks/useGetQueryParameters';
import activate from '@/services/accountActivations/activateUser';
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
        dispatch(updateLoginStatus(data));
        success(ACCOUNT_ACTIVATIONS.SUCCESS);
      }
      if (data.status === 'unprocessable_entity') {
        warn(ACCOUNT_ACTIVATIONS.WARN);
      }
    }
    router.push(HOME);
  }, [dispatch, params, router]);

  return {
    handleActivate,
  };
};

export default useAccountActivations;
