import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '@/common/store';
import { selectCurrentUser } from '@/features/currentUser/selecters';
import { deleteCurrentUser } from '@/features/currentUser/slice';
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

  // NOTE: 型が不明なため、anyで暫定対応
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOutsideClick = (e: { target: any }) => {
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
