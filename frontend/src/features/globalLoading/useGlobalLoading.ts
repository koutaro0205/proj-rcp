import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '@/common/store';

import { selectIsGlobalLoading } from './selectors';
import { setIsLoading as _setIsLoading } from './slice';

export const useGlobalLoading = () => {
  const dispatch: AppDispatch = useDispatch();

  const isLoading = useSelector(selectIsGlobalLoading);

  const setIsLoading = useCallback(
    (loadingStatus: boolean) => {
      dispatch(_setIsLoading(loadingStatus));
    },
    [dispatch]
  );

  return {
    isLoading,
    setIsLoading,
  };
};
