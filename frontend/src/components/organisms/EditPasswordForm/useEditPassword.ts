import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { PASSWORD_RESETS } from '@/common/constants/toast';
import { AppDispatch } from '@/common/store';
import { validatePassword } from '@/common/validations/password';
import { updateLoginStatus } from '@/features/currentUser/slice';
import useQueryParameters from '@/hooks/useQueryParameters';
import checkValidity, {
  ResponseData,
} from '@/services/passwordResets/checkValidity';
import resetPassword, {
  ResponseData as _ResponseData,
} from '@/services/passwordResets/resetPassword';
import { isEmptyArray } from '@/utils/match';
import { error, info, success, warn } from '@/utils/notifications';

type DefaultValue = {
  password: string;
  password_confirmation: string;
};

const useEditPassword = () => {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const { params } = useQueryParameters();

  const isValid = useCallback(
    (data: ResponseData | _ResponseData) => {
      if (data.status === 'unprocessable_entity') {
        router.push('/');
        error(PASSWORD_RESETS.ERROR);
        return;
      }
      if (data.status === 'unauthorized') {
        router.push('/');
        error(PASSWORD_RESETS.INVALID);
        return;
      }
      // NOTE: キー「expired」の存在性をチェックしてからでないと型エラーになるため暫定実装
      if ('expired' in data && data.expired) {
        router.push('/');
        warn(PASSWORD_RESETS.WARN);
        return;
      }
      return data.status === 'ok';
    },
    [router]
  );

  const handleCheckValidity = useCallback(async () => {
    if (params) {
      const data = await checkValidity(params);
      if (isValid(data)) {
        info(PASSWORD_RESETS.INFO);
      }
    }
  }, [isValid, params]);

  const handleResetPassword = useCallback(
    async (newPasswordsParams: DefaultValue) => {
      if (params) {
        const data = await resetPassword(params, newPasswordsParams);
        if (isValid(data)) {
          success(PASSWORD_RESETS.SUCCESS);
          router.push('/');
          dispatch(updateLoginStatus(data));
        }
      }
    },
    [dispatch, isValid, params, router]
  );

  useEffect(() => {
    handleCheckValidity();
  }, [handleCheckValidity]);

  const DEFAULTS: DefaultValue = {
    password: '',
    password_confirmation: '',
  };

  const [newPasswords, setNewPasswords] = useState<DefaultValue>(DEFAULTS);
  const [formErrors, setFormErrors] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { name } = target;
    const { value } = target;

    setNewPasswords({ ...newPasswords, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validatePassword(
      newPasswords.password,
      newPasswords.password_confirmation
    );

    if (isEmptyArray(errors)) {
      await handleResetPassword(newPasswords);
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

export default useEditPassword;
