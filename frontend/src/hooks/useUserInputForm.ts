import React, { useCallback, useState, useEffect, useMemo } from 'react';

import { useCurrentUser } from '@/features/currentUser/useCurrentUser';
import { UserParams } from '@/services/users/types';
import { isEmptyArray } from '@/utils/match';

import { useUploadFiles } from './useUploadFiles';

const DEFAULTS: UserParams = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  image: {
    io: '',
    filename: '',
  },
};

export const useUserInputForm = () => {
  const { currentUser } = useCurrentUser();

  const {
    inputRef,
    imageInfo,
    imageUrl,
    file,
    setFile,
    handleFileChange,
    handleClick,
  } = useUploadFiles();

  const initialUserState = useMemo(() => {
    return { ...DEFAULTS, ...currentUser };
  }, [currentUser]);

  const [userInfo, setUserInfo] = useState<UserParams>(initialUserState);
  const [formErrors, setFormErrors] = useState<string[]>([]);

  useEffect(() => {
    setUserInfo(initialUserState);
  }, [initialUserState]);

  useEffect(() => {
    setUserInfo({
      ...userInfo,
      image: { ...imageInfo },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageInfo]);

  const handleResetFile = useCallback(() => {
    setFile(null);
    setUserInfo({
      ...userInfo,
      image: DEFAULTS.image,
    });
  }, [setFile, userInfo]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { target } = e;
      const { name } = target;
      const { value } = target;

      setUserInfo({ ...userInfo, [name]: value });
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
    inputRef,
    imageUrl,
    file,
    handleChange,
    checkCanRequest,
    handleFileChange,
    handleResetFile,
    handleClick,
  };
};
