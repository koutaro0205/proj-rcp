import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { PASSWORD_RESETS, USERS } from '@/common/constants/toast';
import { validatePasswordResets } from '@/common/validations/passwordResets';
import useGetAllUsers from '@/hooks/useGetAllUsers';
import sendPasswordResetEmail from '@/services/passwordResets/sendPasswordResetEmail';
import { isEmptyArray } from '@/utils/match';
import { info } from '@/utils/notifications';
import { handleResponseError } from '@/utils/requestError';

const usePasswordResetForm = () => {
  const [email, setEmail] = useState<string>('');
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const router = useRouter();
  const { data, error } = useGetAllUsers();
  const users = data && data;

  if (error) handleResponseError(USERS.ERROR);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validatePasswordResets({ email, users });

    if (isEmptyArray(errors)) {
      sendPasswordResetEmail({ email });
      router.push('/');
      info(PASSWORD_RESETS.TRANSMISSION_COMPLETED);
      return;
    }
    setFormErrors(errors);
  };

  return {
    formErrors,
    handleChange,
    handleSubmit,
  };
};

export default usePasswordResetForm;
