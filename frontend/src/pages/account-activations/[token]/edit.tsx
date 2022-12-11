import { NextPage } from 'next';
import React from 'react';

import ContentWidth from '@/components/layouts/ContentWidth';
import Layout from '@/components/templates/Layout';
import useAccountActivations from '@/hooks/useAccountActivations';

const LoginPage: NextPage = () => {
  return (
    <Layout>
      <ContentWidth>Loading...</ContentWidth>
    </Layout>
  );
};

export default LoginPage;
