import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { HOME } from '@/common/constants/path';
import { PASSWORD_RESETS } from '@/common/constants/toast';
import { validatePasswordResets } from '@/common/validations/passwordResets';
import useGetAllUsers from '@/hooks/useGetAllUsers';
import sendPasswordResetEmail from '@/services/passwordResets/sendPasswordResetEmail';
import { isEmptyArray } from '@/utils/match';
import { info } from '@/utils/notifications';

const usePasswordResetForm = () => {
  const [email, setEmail] = useState<string>('');
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const router = useRouter();
  const { users } = useGetAllUsers();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validatePasswordResets({ email, users });

    if (isEmptyArray(errors)) {
      sendPasswordResetEmail({ email });
      router.push(HOME);
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
