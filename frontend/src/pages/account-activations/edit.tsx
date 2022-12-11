import { NextPage } from 'next';
import React, { useEffect } from 'react';

import ContentWidth from '@/components/layouts/ContentWidth';
import Layout from '@/components/templates/Layout';
import useAccountActivations from '@/hooks/useAccountActivations';

const AccountActivationsPage: NextPage = () => {
  const { handleActivate } = useAccountActivations();
  useEffect(() => {
    handleActivate();
  }, [handleActivate]);
  return (
    <Layout>
      <ContentWidth>Loading...</ContentWidth>
    </Layout>
  );
};

export default AccountActivationsPage;
