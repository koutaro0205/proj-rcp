import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { UPDATE_USER } from '@/common/constants/toast';
import { AppDispatch } from '@/common/store';
import {
  validateEmail,
  validatePassword,
  validateUserName,
} from '@/common/validations/updateUser';
import { fetchCurrentUser } from '@/features/currentUser/slice';
import { useInputForm } from '@/hooks/useInputForm';
import updateUser from '@/services/users/updateUser';
import { isEmptyArray } from '@/utils/match';
import { error, success } from '@/utils/notifications';

export const useEditSection = () => {
  const { currentUser, userInfo, handleChange, handleFileChange } =
    useInputForm();

  const [userNameErrors, setUserNameErrors] = useState<string[]>([]);
  const [emailErrors, setEmailErrors] = useState<string[]>([]);
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);

  const dispatch: AppDispatch = useDispatch();

  const userNameErrorMessages = validateUserName(userInfo.name);
  const emailErrorMessages = validateEmail(userInfo.email);
  const passwordErrorMessages = validatePassword(
    userInfo.password,
    userInfo.password_confirmation
  );

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
        dispatch(fetchCurrentUser());
        return;
      }
      error(UPDATE_USER.ERROR);
    },
    [checkCanRequest, currentUser.id, dispatch, userInfo]
  );

  return {
    userInfo,
    userNameErrors,
    emailErrors,
    passwordErrors,
    handleChange,
    handleFileChange,
    handleSubmit,
  };
};
