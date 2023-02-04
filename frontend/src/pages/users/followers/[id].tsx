import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import React from 'react';

import { User } from '@/@types/data';
import { FOLLOWERS_PATH } from '@/common/constants/path';
import Loading from '@/components/atoms/Loading';
import SectionTitle from '@/components/atoms/Title/SectionTitle';
import ContentWidth from '@/components/layouts/ContentWidth';
import FlexContainer from '@/components/layouts/FlexContainer';
import CurrentUserProfileCard from '@/components/organisms/ProfileCard/CurrentUserProfileCard';
import UsersList from '@/components/organisms/UsersList';
import Layout from '@/components/templates/Layout';
import { useAuthGaurd } from '@/hooks/useAuthGaurd';
import { useFollowing } from '@/hooks/useFollowing';
import getAllUsers from '@/services/users/getAllUsers';
import getUser from '@/services/users/getUser';

type UserDetailPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const FollowerListPage: NextPage<UserDetailPageProps> = ({ user }) => {
  const { currentUser } = useAuthGaurd();
  const { followerList } = useFollowing({ userId: user.id });

  return (
    <Layout>
      <ContentWidth>
        {currentUser ? (
          <>
            <SectionTitle sectionTitle="フォロワー" />
            <FlexContainer>
              <CurrentUserProfileCard currentUser={currentUser} />
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
