import { NextPage } from 'next';
import React from 'react';

import SectionTitle from '@/components/atoms/Title/SectionTitle';
import ContentWidth from '@/components/layouts/ContentWidth';
import PasswordResetForm from '@/components/organisms/PasswordResetForm';
import Layout from '@/components/templates/Layout';

const LoginPage: NextPage = () => {
  return (
    <Layout>
      <ContentWidth>
        <SectionTitle sectionTitle="パスワード再設定" />
        <PasswordResetForm />
      </ContentWidth>
    </Layout>
  );
};

export default LoginPage;
