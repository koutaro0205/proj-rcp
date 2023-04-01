import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '@/common/store';

import { selectCurrentUser, selectIsLoggedIn } from './selectors';
import {
  fetchCurrentUser as _fetchCurrentUser,
  updateLoginStatus as _updateLoginStatus,
  updateCurrentUser as _updateCurrentUser,
  deleteCurrentUser as _deleteCurrentUser,
} from './slice';
import { UpdateCurrentUser, UpdateLoginStatus } from './type';

export const useCurrentUser = () => {
  const dispatch: AppDispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const currentUser = useSelector(selectCurrentUser);

  const fetchCurrentUser = useCallback(() => {
    dispatch(_fetchCurrentUser());
  }, [dispatch]);

  const updateLoginStatus = useCallback(
    ({ logged_in, user }: UpdateLoginStatus) => {
      dispatch(_updateLoginStatus({ logged_in, user }));
    },
    [dispatch]
  );

  const updateCurrentUser = useCallback(
    ({ user }: UpdateCurrentUser) => {
      dispatch(_updateCurrentUser({ user }));
    },
    [dispatch]
  );

  const deleteCurrentUser = useCallback(() => {
    dispatch(_deleteCurrentUser());
  }, [dispatch]);

  return {
    isLoggedIn,
    currentUser,
    fetchCurrentUser,
    updateCurrentUser,
    updateLoginStatus,
    deleteCurrentUser,
  };
};
