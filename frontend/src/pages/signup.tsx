import { NextPage } from 'next';
import React from 'react';

import SectionTitle from '@/components/atoms/Title/SectionTitle';
import ContentWidth from '@/components/layouts/ContentWidth';
import SignupForm from '@/components/organisms/SignupForm';
import Layout from '@/components/templates/Layout';

const SignupPage: NextPage = () => {
  return (
    <Layout>
      <ContentWidth>
        <SectionTitle sectionTitle="ユーザー登録" />
        <SignupForm />
      </ContentWidth>
    </Layout>
  );
};

export default SignupPage;
