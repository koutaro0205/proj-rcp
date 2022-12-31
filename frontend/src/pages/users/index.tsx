import { NextPage } from 'next';
import React from 'react';
import { useSelector } from 'react-redux';

import SectionTitle from '@/components/atoms/Title/SectionTitle';
import ContentWidth from '@/components/layouts/ContentWidth';
import FlexContainer from '@/components/layouts/FlexContainer';
import CurrentUserProfileCard from '@/components/organisms/ProfileCard/CurrentUserProfileCard';
import UsersList from '@/components/organisms/UsersList';
import Layout from '@/components/templates/Layout';
import { selectCurrentUser } from '@/features/currentUser/selecters';
import useGetAllUsers from '@/hooks/useGetAllUsers';
import { handleResponseError } from '@/utils/requestError';

const UsersPage: NextPage = () => {
  const { data, error } = useGetAllUsers();
  if (error) {
    handleResponseError('エラー');
  }

  const currentUser = useSelector(selectCurrentUser);
  return (
    <Layout>
      <ContentWidth>
        <SectionTitle sectionTitle="ユーザー一覧" />
        <FlexContainer>
          <CurrentUserProfileCard currentUser={currentUser} />
          <UsersList users={data} currentUser={currentUser} />
        </FlexContainer>
      </ContentWidth>
    </Layout>
  );
};

export default UsersPage;
