import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  selectCurrentUser,
  selectIsLoggedIn,
} from '@/features/currentUser/selectors';

import { HEADER_MENU_HEIGHT } from './styles';

export const useHeader = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const currentUser = useSelector(selectCurrentUser);
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
