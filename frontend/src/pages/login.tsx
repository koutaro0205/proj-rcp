import { NextPage } from 'next';
import React from 'react';

import SectionTitle from '@/components/atoms/Title/SectionTitle';
import ContentWidth from '@/components/layouts/ContentWidth';
import LoginForm from '@/components/organisms/LoginForm';
import InnerWrapper from '@/components/templates/InnerWrapper';
import Layout from '@/components/templates/Layout';
import { useCurrentUser } from '@/features/currentUser/useCurrentUser';

const LoginPage: NextPage = () => {
  const { isLoggedIn } = useCurrentUser();
  return (
    <Layout>
      <ContentWidth>
        <SectionTitle sectionTitle="ログイン" />
        {isLoggedIn ? (
          <span>すでにログインしています。</span>
        ) : (
          <InnerWrapper>
            <LoginForm />
          </InnerWrapper>
        )}
      </ContentWidth>
    </Layout>
  );
};

export default LoginPage;
