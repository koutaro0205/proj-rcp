import React, { useCallback } from 'react';

import { SIGNUP } from '@/common/constants/toast';
import { validateUser } from '@/common/validations/signup';
import useGetAllUsers from '@/hooks/useGetAllUsers';
import { useUserInputForm } from '@/hooks/useUserInputForm';
import signup from '@/services/users/addUser';
import { info } from '@/utils/notifications';

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

  const { users } = useGetAllUsers();

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const errors = validateUser({ user: userInfo, users });
      if (!checkCanRequest(errors)) return;

      await signup(userInfo);
      // FIXME: 新規アカウント登録成功後の処理を追加する。
      info(SIGNUP.INFO);
    },
    [checkCanRequest, userInfo, users]
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
