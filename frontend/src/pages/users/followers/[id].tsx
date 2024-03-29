import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import React from 'react';

import { FOLLOWERS_PATH } from '@/common/constants/path';
import { User } from '@/common/types/data';
import Loading from '@/components/atoms/Loading';
import SectionTitle from '@/components/atoms/Title/SectionTitle';
import ContentWidth from '@/components/layouts/ContentWidth';
import FlexContainer from '@/components/layouts/FlexContainer';
import CurrentUserProfileSection from '@/components/organisms/ProfileSection/CurrentUserProfileSection';
import UsersList from '@/components/organisms/UsersList';
import Layout from '@/components/templates/Layout';
import { useCurrentUser } from '@/features/currentUser/useCurrentUser';
import { useAuthGaurd } from '@/hooks/useAuthGaurd';
import { useFollowing } from '@/hooks/useFollowing';
import getAllUsers from '@/services/users/getAllUsers';
import getUser from '@/services/users/getUser';

type UserDetailPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const FollowerListPage: NextPage<UserDetailPageProps> = ({ user }) => {
  useAuthGaurd();
  const { isLoggedIn, currentUser } = useCurrentUser();
  const { followerList } = useFollowing({ userId: user.id });

  return (
    <Layout>
      <ContentWidth>
        {currentUser && isLoggedIn ? (
          <>
            <SectionTitle sectionTitle="フォロワー" />
            <FlexContainer>
              <CurrentUserProfileSection currentUser={currentUser} />
              <UsersList
                users={followerList}
                currentUser={currentUser}
                label="followers"
              />
            </FlexContainer>
          </>
        ) : (
          <Loading size="m" />
        )}
      </ContentWidth>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const users: User[] = await getAllUsers();
  const paths = users.map((user: User) => FOLLOWERS_PATH(user.id));

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

export default FollowerListPage;
