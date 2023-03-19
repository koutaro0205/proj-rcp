import React, { useCallback } from 'react';

import { SIGNUP, USERS } from '@/common/constants/toast';
import { validateUser } from '@/common/validations/signup';
import useGetAllUsers from '@/hooks/useGetAllUsers';
import { useUserInputForm } from '@/hooks/useUserInputForm';
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
  } = useUserInputForm();

  const { data, error } = useGetAllUsers();
  if (error) handleResponseError(USERS.ERROR);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const errors = validateUser({ user: userInfo, users: data });
      if (!checkCanRequest(errors)) return;

      await signup(userInfo);
      // FIXME: 新規アカウント登録成功後の処理を追加する。
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
