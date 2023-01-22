import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { HOME } from '@/common/constants/path';
import { ACCOUNT_ACTIVATIONS } from '@/common/constants/toast';
import { AppDispatch } from '@/common/store';
import { updateCurrentUser } from '@/features/currentUser/slice';
import useQueryParameters from '@/hooks/useQueryParameters';
import activate from '@/services/accountActivations/activateUser';
import { success, warn } from '@/utils/notifications';

const useAccountActivations = () => {
  const { params } = useQueryParameters();

  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();

  const handleActivate = useCallback(async () => {
    if (params) {
      const { token, email } = params;
      const data = await activate({ token, email });

      if (data.status === 'ok') {
        dispatch(updateCurrentUser(data));
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
