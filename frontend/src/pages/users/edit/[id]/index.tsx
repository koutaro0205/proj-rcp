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
import EditSection from '@/components/organisms/EditSection';
import useEditableUser from '@/hooks/useEditableUser';
import getAllUsers from '@/services/users/getAllUsers';
import getUser from '@/services/users/getUser';

type UserEditPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const UserEditPage: NextPage<UserEditPageProps> = ({ user }) => {
  useEditableUser({ user });
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }
  return <EditSection />;
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
  const user = await getUser(userId);

  return {
    props: {
      user,
    },
    revalidate: 10,
  };
};

export default UserEditPage;
