import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '@/common/store';
import { validateLoginInfo } from '@/common/validations/auth/login';
import { updateCurrentUser } from '@/features/currentUser/slice';
import useAuth from '@/hooks/useAuth';
import { LoginParams } from '@/services/auth/login';
import { isEmptyArray } from '@/utils/match';

const useLoginForm = () => {
  const dispatch: AppDispatch = useDispatch();

  const DEFAULTS: LoginParams = {
    email: '',
    password: '',
    remember_me: false,
  };

  const [authInfo, setAuthInfo] = useState<LoginParams>(DEFAULTS);
  const [formErrors, setFormErrors] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setAuthInfo({ ...authInfo, [name]: value });
  };

  const { handleLogin } = useAuth(authInfo);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateLoginInfo(authInfo);

    if (!isEmptyArray(errors)) {
      setFormErrors(errors);
    } else {
      const data = await handleLogin();
      if (data) {
        dispatch(updateCurrentUser(data));
      }
    }
  };

  return {
    authInfo,
    formErrors,
    handleChange,
    handleSubmit,
  };
};

export default useLoginForm;
