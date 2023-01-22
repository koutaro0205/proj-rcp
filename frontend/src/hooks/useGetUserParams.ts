import { useRouter } from 'next/router';
import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { User } from '@/@types/data';
// import { HOME } from '@/common/constants/path';
import { SIGNUP, USERS, UPDATE_USER } from '@/common/constants/toast';
import { AppDispatch } from '@/common/store';
import { validateUser } from '@/common/validations/signup';
import { validateUpdatedUser } from '@/common/validations/updateUser';
import { selectCurrentUser } from '@/features/currentUser/selecters';
import {
  fetchCurrentUser,
  // updateCurrentUser,
} from '@/features/currentUser/slice';
import useGetAllUsers from '@/hooks/useGetAllUsers';
import { UserCreateOrUpdateResponse, UserParams } from '@/services/users/types';
import { Args } from '@/services/users/updateUser';
import { isEmptyArray } from '@/utils/match';
import { info, success } from '@/utils/notifications';
import { handleResponseError } from '@/utils/requestError';

const DEFAULTS: UserParams = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  image: {
    data: '',
    filename: '',
  },
};

type CreateRequestData = {
  onSave: (params: UserParams) => Promise<UserCreateOrUpdateResponse>;
  pattern: 'create';
};

type UpdateRequestData = {
  onSave: ({ params, id }: Args) => Promise<UserCreateOrUpdateResponse>;
  pattern: 'update';
};

type RequestData = CreateRequestData | UpdateRequestData;

const useGetUserParams = ({ onSave, pattern }: RequestData) => {
  const router = useRouter();
  const currentUser = useSelector(selectCurrentUser);
  const dispatch: AppDispatch = useDispatch();

  const { data, error } = useGetAllUsers();
  if (error) handleResponseError(USERS.ERROR);

  // おそらくいらない（currentUserを使えばいい）
  const currUser = useMemo(() => {
    return currentUser?.id
      ? data?.find((e: User) => e.id === currentUser.id)
      : {};
  }, [currentUser?.id, data]);

  const initialUserState = useMemo(() => {
    return { ...DEFAULTS, ...currUser };
  }, [currUser]);

  const [userInfo, setUserInfo] = useState<UserParams>(initialUserState);
  const [formErrors, setFormErrors] = useState<string[]>([]);

  useEffect(() => {
    setUserInfo(initialUserState);
  }, [initialUserState]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { target } = e;
      const { name } = target;
      const { value } = target;

      setUserInfo({ ...userInfo, [name]: value });
    },
    [userInfo]
  );

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { files } = e.target;

      if (files) {
        const file = files[0];
        const reader = new FileReader();
        setUserInfo({
          ...userInfo,
          image: {
            data: reader.result,
            filename: file ? file.name : 'unknownfile',
          },
        });
        reader.readAsDataURL(file);
      }
    },
    [userInfo]
  );

  const checkCanRequest = useCallback((errors: string[]): boolean => {
    if (!isEmptyArray(errors)) {
      setFormErrors(errors);
      return false;
    }
    return true;
  }, []);

  // FIXME: リファクタリングする
  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (pattern === 'create') {
        const errors = validateUser({ user: userInfo, users: data });
        if (checkCanRequest(errors)) {
          await onSave(userInfo);
          info(SIGNUP.INFO);
        }
      }

      if (pattern === 'update') {
        const errors = validateUpdatedUser({ user: userInfo });
        if (checkCanRequest(errors)) {
          const responseData = await onSave({
            params: userInfo,
            id: currentUser.id,
          });
          // eslint-disable-next-line no-console
          console.log(responseData);
          success(UPDATE_USER.SUCCESS);
          // NOTE: 更新後データをリフェッチ
          dispatch(fetchCurrentUser());
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data, onSave, pattern, router, userInfo]
  );

  return {
    userInfo,
    formErrors,
    handleChange,
    handleFileChange,
    handleSubmit,
  };
};

export default useGetUserParams;
