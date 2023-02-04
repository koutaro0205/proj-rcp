import { useState, useRef, useEffect } from 'react';

import useAuth from '@/hooks/useAuth';

const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const { handleLogout } = useAuth();

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
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return {
    isOpen,
    dropdownRef,
    handleClick,
    handleLogoutClick,
  };
};

export default useDropdown;
