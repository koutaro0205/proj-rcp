import { useEffect, useState } from 'react';

import { useCurrentUser } from '@/features/currentUser/useCurrentUser';

import { HEADER_MENU_HEIGHT } from './styles';

export const useHeader = () => {
  const { currentUser, isLoggedIn } = useCurrentUser();
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > HEADER_MENU_HEIGHT) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return { isLoggedIn, currentUser, isSticky };
};
