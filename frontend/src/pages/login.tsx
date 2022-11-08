import { NextPage } from 'next';
import React from 'react';

import SectionTitle from '@/components/atoms/SectionTitle';
import ContextWidth from '@/components/layouts/ContentWidth';
import LoginForm from '@/components/organisms/LoginForm';
import Layout from '@/components/templates/Layout';

const LoginPage: NextPage = () => {
  return (
    <Layout>
      <ContextWidth>
        <SectionTitle sectionTitle="ログイン" />
        <LoginForm />
      </ContextWidth>
    </Layout>
  );
};

export default LoginPage;
