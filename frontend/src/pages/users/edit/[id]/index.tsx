import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import { User } from '@/@types/data';
import { USER_EDIT_PATH } from '@/common/constants/path';
import Loading from '@/components/atoms/Loading';
import useCorrectUser from '@/hooks/useCorrectUser';
import getAllUsers from '@/services/users/getAllUsers';
import getEditedUser from '@/services/users/getEditedUser';

import EditUserPasswordPage from './password';

type UserEditPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const UserEditPage: NextPage<UserEditPageProps> = ({ user }) => {
  const router = useRouter();
  useCorrectUser({ user, router });

  if (router.isFallback) {
    return <Loading />;
  }
  // NOTE: デフォルトでパスワード編集タブを開く
  return <EditUserPasswordPage />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const users: User[] = await getAllUsers();
  const paths = users.map((user: User) => USER_EDIT_PATH(user.id));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  if (!params) {
    throw new Error('params is undefined');
  }
  const userId = Number(params.id);
  const data = await getEditedUser(userId);
  const user = data.status === 'ok' ? data.user : {};

  return {
    props: {
      user,
    },
    revalidate: 10,
  };
};

export default UserEditPage;
