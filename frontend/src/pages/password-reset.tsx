import { NextPage } from 'next';
import React from 'react';

import SectionTitle from '@/components/atoms/SectionTitle';
import ContextWidth from '@/components/layouts/ContentWidth';
import PasswordResetForm from '@/components/organisms/PasswordResetForm';
import Layout from '@/components/templates/Layout';

const LoginPage: NextPage = () => {
  return (
    <Layout>
      <ContextWidth>
        <SectionTitle sectionTitle="パスワード再設定" />
        <PasswordResetForm />
      </ContextWidth>
    </Layout>
  );
};

export default LoginPage;
