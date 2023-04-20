import { NextPage } from 'next';
import React from 'react';

import Loading from '@/components/atoms/Loading';
import SectionTitle from '@/components/atoms/Title/SectionTitle';
import ContentWidth from '@/components/layouts/ContentWidth';
import FlexContainer from '@/components/layouts/FlexContainer';
import CurrentUserProfileSection from '@/components/organisms/ProfileSection/CurrentUserProfileSection';
import UsersList from '@/components/organisms/UsersList';
import Layout from '@/components/templates/Layout';
import { useCurrentUser } from '@/features/currentUser/useCurrentUser';
import { useAuthGaurd } from '@/hooks/useAuthGaurd';
import useGetAllUsers from '@/hooks/useGetAllUsers';

const UsersPage: NextPage = () => {
  useAuthGaurd();
  const { isLoggedIn, currentUser } = useCurrentUser();
  const { users } = useGetAllUsers();

  return (
    <Layout>
      <ContentWidth>
        {currentUser && isLoggedIn ? (
          <>
            <SectionTitle sectionTitle="ユーザー一覧" />
            <FlexContainer>
              <CurrentUserProfileSection currentUser={currentUser} />
              <UsersList
                users={users}
                currentUser={currentUser}
                label="登録ユーザー一覧"
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

export default UsersPage;
