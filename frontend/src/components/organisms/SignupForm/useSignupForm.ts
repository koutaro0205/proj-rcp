import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { ApiContext } from '@/@types/data';
import { ROOT_URL } from '@/common/constants/url';
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

const context: ApiContext = {
  apiRootUrl: ROOT_URL,
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
  if (error) {
    handleResponseError('ユーザー一覧の取得に失敗しました。');
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateUser(newUserInfo, data.users);

    if (!isEmptyArray(errors)) {
      setFormErrors(errors);
    } else {
      await signup(context, newUserInfo);
      router.push('/');
      info(
        'ユーザー登録しました。ご登録のメールアドレスを確認し、アカウントの有効化を完了させてください。'
      );
    }
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
