import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { SIGNUP, USERS } from '@/common/constants/toast';
import { validateUser } from '@/common/validations/signup';
import useGetAllUsers from '@/hooks/useGetAllUsers';
import signup, { UserParams } from '@/services/users/addUser';
import { isEmptyArray } from '@/utils/match';
import { info } from '@/utils/notifications';
import { handleResponseError } from '@/utils/requestError';

type DefaultValue = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  image: {
    data: string | ArrayBuffer | null;
    filename: string;
  };
};

const useSignupForm = () => {
  const DEFAULTS: DefaultValue = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    image: {
      data: '',
      filename: '',
    },
  };

  const [newUserInfo, setNewUserInfo] = useState<UserParams>(DEFAULTS);
  const [formErrors, setFormErrors] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { name } = target;
    const { value } = target;

    setNewUserInfo({ ...newUserInfo, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files) {
      const file = files[0];
      const reader = new FileReader();
      setNewUserInfo({
        ...newUserInfo,
        image: {
          data: reader.result,
          filename: file ? file.name : 'unknownfile',
        },
      });
      reader.readAsDataURL(file);
    }
  };

  const router = useRouter();
  const { data, error } = useGetAllUsers();
  if (error) handleResponseError(USERS.ERROR);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateUser({ user: newUserInfo, users: data.users });

    if (isEmptyArray(errors)) {
      await signup(newUserInfo);
      router.push('/');
      info(SIGNUP.SUCCESS);
      return;
    }
    setFormErrors(errors);
  };

  return {
    newUserInfo,
    formErrors,
    handleChange,
    handleFileChange,
    handleSubmit,
  };
};

export default useSignupForm;
