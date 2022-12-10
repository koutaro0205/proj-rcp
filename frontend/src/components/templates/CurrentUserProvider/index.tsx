import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '@/common/store';
import { fetchCurrentUser } from '@/features/currentUser/slice';

type Props = {
  children: React.ReactNode;
};

const CurrentUserProvider: React.FC<Props> = ({ children }) => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return <div>{children}</div>;
};

export default CurrentUserProvider;
