import React, { useEffect } from 'react';

import { useCurrentUser } from '@/features/currentUser/useCurrentUser';

type Props = {
  children: React.ReactNode;
};

const CurrentUserProvider: React.FC<Props> = ({ children }) => {
  const { fetchCurrentUser } = useCurrentUser();
  // NOTE: ページがリロードされた場合のみ、リフェッチする。
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      sessionStorage.setItem('reloading', 'true');
      e.preventDefault();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      sessionStorage.removeItem('reloading');
    };
  }, []);

  useEffect(() => {
    const reloading = sessionStorage.getItem('reloading');
    if (reloading) {
      fetchCurrentUser();
    }
  }, [fetchCurrentUser]);
  return <div>{children}</div>;
};

export default CurrentUserProvider;
