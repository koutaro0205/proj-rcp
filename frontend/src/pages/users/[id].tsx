import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';

import { User } from '@/@types/data';
import { USERS_API, USERS_PATH } from '@/common/constants/path';
import { ROOT_URL } from '@/common/constants/url';
import SectionTitle from '@/components/atoms/Title/SectionTitle';
import ContextWidth from '@/components/layouts/ContentWidth';
import ProfileCard from '@/components/organisms/ProfileCard';
import Layout from '@/components/templates/Layout';
import { selectCurrentUser } from '@/features/currentUser/selecters';
import getUser from '@/services/users/getUser';
import axios from '@/utils/axios';

type UserDetailPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const UserDetailPage: NextPage<UserDetailPageProps> = ({ user }) => {
  const router = useRouter();
  const currentUser = useSelector(selectCurrentUser);

  // FIXME: 暫定
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      <ContextWidth>
        <SectionTitle sectionTitle="ユーザー情報" />
        <ProfileCard user={user} currentUser={currentUser} />
      </ContextWidth>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axios.get(`${ROOT_URL}/${USERS_API}`);
  const users: User[] = response.data;
  const paths = users.map((user: User) => `${USERS_PATH}/${user.id}`);

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

export default UserDetailPage;
