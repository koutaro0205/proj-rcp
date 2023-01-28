import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { selectCurrentUser } from '@/features/currentUser/selecters';
import { UserParams } from '@/services/users/types';
import { isEmptyArray } from '@/utils/match';

const DEFAULTS: UserParams = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  image: {
    data: '',
    filename: '',
  },
};

export const useInputForm = () => {
  const currentUser = useSelector(selectCurrentUser);

  const initialUserState = useMemo(() => {
    return { ...DEFAULTS, ...currentUser };
  }, [currentUser]);

  const [userInfo, setUserInfo] = useState<UserParams>(initialUserState);
  const [formErrors, setFormErrors] = useState<string[]>([]);

  useEffect(() => {
    setUserInfo(initialUserState);
  }, [initialUserState]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { target } = e;
      const { name } = target;
      const { value } = target;

      setUserInfo({ ...userInfo, [name]: value });
    },
    [userInfo]
  );

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { files } = e.target;

      if (files) {
        const file = files[0];
        const reader = new FileReader();
        setUserInfo({
          ...userInfo,
          image: {
            data: reader.result,
            filename: file ? file.name : 'unknownfile',
          },
        });
        reader.readAsDataURL(file);
      }
    },
    [userInfo]
  );

  const checkCanRequest = useCallback((errors: string[]): boolean => {
    if (!isEmptyArray(errors)) {
      setFormErrors(errors);
      return false;
    }
    return true;
  }, []);

  return {
    userInfo,
    formErrors,
    currentUser,
    handleChange,
    handleFileChange,
    checkCanRequest,
  };
};
