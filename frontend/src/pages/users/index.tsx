import { NextPage } from 'next';
import React from 'react';

import Loading from '@/components/atoms/Loading';
import SectionTitle from '@/components/atoms/Title/SectionTitle';
import ContentWidth from '@/components/layouts/ContentWidth';
import FlexContainer from '@/components/layouts/FlexContainer';
import CurrentUserProfileCard from '@/components/organisms/ProfileCard/CurrentUserProfileCard';
import UsersList from '@/components/organisms/UsersList';
import Layout from '@/components/templates/Layout';
import { useCurrentUser } from '@/features/currentUser/useCurrentUser';
import { useAuthGaurd } from '@/hooks/useAuthGaurd';
import useGetAllUsers from '@/hooks/useGetAllUsers';
import { handleResponseError } from '@/utils/requestError';

const UsersPage: NextPage = () => {
  useAuthGaurd();
  const { isLoggedIn, currentUser } = useCurrentUser();
  const { data, error } = useGetAllUsers();
  if (error) {
    handleResponseError('failed to get users');
  }

  return (
    <Layout>
      <ContentWidth>
        {currentUser && isLoggedIn && data ? (
          <>
            <SectionTitle sectionTitle="ユーザー一覧" />
            <FlexContainer>
              <CurrentUserProfileCard currentUser={currentUser} />
              <UsersList
                users={data}
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
