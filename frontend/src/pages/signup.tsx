import { NextPage } from 'next';
import React from 'react';

import SectionTitle from '@/components/atoms/SectionTitle';
import ContextWidth from '@/components/layouts/ContentWidth';
import SignupForm from '@/components/organisms/SignupForm';
import Layout from '@/components/templates/Layout';

const SignupPage: NextPage = () => {
  return (
    <Layout>
      <ContextWidth>
        <SectionTitle sectionTitle="ユーザー登録" />
        <SignupForm />
      </ContextWidth>
    </Layout>
  );
};

export default SignupPage;
