import React, { useCallback, useState, useMemo } from 'react';

import { UPDATE_USER } from '@/common/constants/toast';
import {
  validateEmail,
  validatePassword,
  validateUserName,
} from '@/common/validations/updateUser';
import { useCurrentUser } from '@/features/currentUser/useCurrentUser';
import { useUserInputForm } from '@/hooks/useUserInputForm';
import updateUser from '@/services/users/updateUser';
import { isEmptyArray } from '@/utils/match';
import { error, success } from '@/utils/notifications';

export const useEditSection = () => {
  const {
    userInfo,
    currentUser,
    inputRef,
    imageUrl,
    file,
    handleResetFile,
    handleClick,
    handleChange,
    handleFileChange,
  } = useUserInputForm();

  const { fetchCurrentUser } = useCurrentUser();

  const [userNameErrors, setUserNameErrors] = useState<string[]>([]);
  const [emailErrors, setEmailErrors] = useState<string[]>([]);
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);

  const userNameErrorMessages = useMemo(() => {
    return validateUserName(userInfo.name);
  }, [userInfo.name]);

  const emailErrorMessages = useMemo(() => {
    return validateEmail(userInfo.email);
  }, [userInfo.email]);

  const passwordErrorMessages = useMemo(() => {
    return validatePassword(userInfo.password, userInfo.password_confirmation);
  }, [userInfo.password, userInfo.password_confirmation]);

  const checkCanRequest = useCallback((): boolean => {
    if (!isEmptyArray(userNameErrorMessages)) {
      setUserNameErrors(userNameErrorMessages);
      return false;
    }
    if (!isEmptyArray(emailErrorMessages)) {
      setEmailErrors(emailErrorMessages);
      return false;
    }
    if (!isEmptyArray(passwordErrorMessages)) {
      setPasswordErrors(passwordErrorMessages);
      return false;
    }

    return true;
  }, [emailErrorMessages, passwordErrorMessages, userNameErrorMessages]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!checkCanRequest()) return;

      const responseData = await updateUser({
        params: userInfo,
        id: currentUser.id,
      });

      if (responseData.status === 'ok') {
        success(UPDATE_USER.SUCCESS);
        // NOTE: 更新後、データをリフェッチしてUIに反映
        fetchCurrentUser();
        return;
      }
      error(UPDATE_USER.ERROR);
    },
    [checkCanRequest, currentUser.id, fetchCurrentUser, userInfo]
  );

  return {
    userInfo,
    userNameErrors,
    emailErrors,
    passwordErrors,
    inputRef,
    imageUrl,
    file,
    handleResetFile,
    handleClick,
    handleChange,
    handleFileChange,
    handleSubmit,
  };
};
