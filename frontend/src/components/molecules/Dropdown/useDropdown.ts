import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '@/common/store';
import {
  deleteCurrentUser,
  selectCurrentUser,
} from '@/features/currentUserSlice';
import useAuth from '@/hooks/useAuth';

const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const currentUser = useSelector(selectCurrentUser);
  const { handleLogout } = useAuth();
  const dispatch: AppDispatch = useDispatch();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // FIXME: 型が不明なため、anyで暫定対応
  const handleOutsideClick = (e: any) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const handleLogoutClick = () => {
    handleLogout();
    dispatch(deleteCurrentUser());
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return {
    isOpen,
    dropdownRef,
    currentUser,
    handleClick,
    handleLogoutClick,
  };
};

export default useDropdown;
