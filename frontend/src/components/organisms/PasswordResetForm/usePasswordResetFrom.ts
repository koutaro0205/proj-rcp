import React, { useState, useMemo } from 'react';

import useGetAllUsers from '@/hooks/useGetAllUsers';

const usePasswordResetForm = () => {
  const [email, setEmail] = useState<string>('');
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const { data, error } = useGetAllUsers();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
  };

  const existedEmail = useMemo(
    () => data && data.find((e: { email: string }) => e.email === email),
    [data, email]
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!existedEmail) {
      setFormErrors(['一致するメールアドレスが存在しません。']);
    } else {
      console.log('メールを送信テスト');
    }
  };

  return {
    formErrors,
    handleChange,
    handleSubmit,
  };
};

export default usePasswordResetForm;
