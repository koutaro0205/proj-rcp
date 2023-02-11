import React, { useCallback } from 'react';

import { SIGNUP, USERS } from '@/common/constants/toast';
import { validateUser } from '@/common/validations/signup';
import useGetAllUsers from '@/hooks/useGetAllUsers';
import { useInputForm } from '@/hooks/useInputForm';
import signup from '@/services/users/addUser';
import { info } from '@/utils/notifications';
import { handleResponseError } from '@/utils/requestError';

export const useSignupForm = () => {
  const {
    userInfo,
    formErrors,
    inputRef,
    imageUrl,
    file,
    handleChange,
    checkCanRequest,
    handleFileChange,
    handleResetFile,
    handleClick,
  } = useInputForm();

  const { data, error } = useGetAllUsers();
  if (error) handleResponseError(USERS.ERROR);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const errors = validateUser({ user: userInfo, users: data });
      if (!checkCanRequest(errors)) return;

      await signup(userInfo);
      info(SIGNUP.INFO);
    },
    [checkCanRequest, data, userInfo]
  );

  return {
    userInfo,
    formErrors,
    inputRef,
    imageUrl,
    file,
    handleChange,
    handleFileChange,
    handleResetFile,
    handleClick,
    handleSubmit,
  };
};
