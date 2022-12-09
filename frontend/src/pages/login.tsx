import { NextPage } from 'next';
import React from 'react';

import SectionTitle from '@/components/atoms/Title/SectionTitle';
import ContentWidth from '@/components/layouts/ContentWidth';
import LoginForm from '@/components/organisms/LoginForm';
import Layout from '@/components/templates/Layout';

const LoginPage: NextPage = () => {
  return (
    <Layout>
      <ContentWidth>
        <SectionTitle sectionTitle="ログイン" />
        <LoginForm />
      </ContentWidth>
    </Layout>
  );
};

export default LoginPage;
