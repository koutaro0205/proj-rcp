import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import { USER_DETAIL_PATH } from '@/common/constants/path';
import { User, UserProfile } from '@/common/types/data';
import Loading from '@/components/atoms/Loading';
import SectionTitle from '@/components/atoms/Title/SectionTitle';
import ContentWidth from '@/components/layouts/ContentWidth';
import ProfileSection from '@/components/organisms/ProfileSection';
import Layout from '@/components/templates/Layout';
import { useCurrentUser } from '@/features/currentUser/useCurrentUser';
import getAllUsers from '@/services/users/getAllUsers';
import getUser from '@/services/users/getUser';

type UserDetailPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const UserDetailPage: NextPage<UserDetailPageProps> = ({ user }) => {
  const router = useRouter();
  const { currentUser } = useCurrentUser();

  // FIXME: 暫定
  if (router.isFallback) {
    return <Loading />;
  }
  return (
    <Layout>
      <ContentWidth>
        <SectionTitle sectionTitle="ユーザー情報" />
        <ProfileSection user={user} currentUser={currentUser} />
      </ContentWidth>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const users: User[] = await getAllUsers();
  const paths = users.map((user: User) => USER_DETAIL_PATH(user.id));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  if (!params) {
    throw new Error('params is undefined');
  }
  const userId = Number(params.id);
  const user: UserProfile = await getUser(userId);

  return {
    props: {
      user,
    },
    revalidate: 10,
  };
};

export default UserDetailPage;
