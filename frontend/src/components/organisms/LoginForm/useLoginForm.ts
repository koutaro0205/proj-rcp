import React, { useState } from 'react';

import { validateLoginInfo } from '@/common/validations/auth/login';
import { useCurrentUser } from '@/features/currentUser/useCurrentUser';
import useAuth from '@/hooks/useAuth';
import useQueryParameters from '@/hooks/useQueryParameters';
import { LoginParams } from '@/services/auth/login';
import { isEmptyArray } from '@/utils/match';

const DEFAULTS: LoginParams = {
  email: '',
  password: '',
  remember_me: false,
};

const useLoginForm = () => {
  const { redirectTo } = useQueryParameters();
  const { updateLoginStatus } = useCurrentUser();

  const [authInfo, setAuthInfo] = useState<LoginParams>(DEFAULTS);
  const { handleLogin } = useAuth(authInfo);

  const [formErrors, setFormErrors] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // FIXME: 型を修正する。
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { target }: any = e;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setAuthInfo({ ...authInfo, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateLoginInfo(authInfo);

    if (!isEmptyArray(errors)) {
      setFormErrors(errors);
      return;
    }

    setFormErrors([]);
    const data = await handleLogin(redirectTo);
    if (data) {
      updateLoginStatus(data);
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
