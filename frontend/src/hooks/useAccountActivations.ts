import { useRouter } from 'next/router';
import { useCallback } from 'react';

import { HOME } from '@/common/constants/path';
import { ACCOUNT_ACTIVATIONS } from '@/common/constants/toast';
import { useCurrentUser } from '@/features/currentUser/useCurrentUser';
import useQueryParameters from '@/hooks/useQueryParameters';
import activate from '@/services/accountActivations/activateUser';
import { success, warn } from '@/utils/notifications';

const useAccountActivations = () => {
  const { params } = useQueryParameters();
  const { updateLoginStatus } = useCurrentUser();

  const router = useRouter();

  const handleActivate = useCallback(async () => {
    if (params) {
      const { token, email } = params;
      const data = await activate({ token, email });

      if (data.status === 'ok') {
        updateLoginStatus(data);
        success(ACCOUNT_ACTIVATIONS.SUCCESS);
      }
      if (data.status === 'unprocessable_entity') {
        warn(ACCOUNT_ACTIVATIONS.WARN);
      }
    }
    router.push(HOME);
  }, [params, router, updateLoginStatus]);

  return {
    handleActivate,
  };
};

export default useAccountActivations;
