import { NextPage } from 'next';
import React, { useEffect } from 'react';

import Explanation from '@/components/atoms/Explanation';
import SectionTitle from '@/components/atoms/Title/SectionTitle';
import ContentWidth from '@/components/layouts/ContentWidth';
import EditPasswordForm from '@/components/organisms/EditPasswordForm';
import InnerWrapper from '@/components/templates/InnerWrapper';
import Layout from '@/components/templates/Layout';

const EditPasswordPage: NextPage = () => {
  return (
    <Layout>
      <ContentWidth>
        <SectionTitle sectionTitle="パスワード再設定" />
        <InnerWrapper>
          <Explanation message="新しいパスワードを入力して下さい" />
          <EditPasswordForm />
        </InnerWrapper>
      </ContentWidth>
    </Layout>
  );
};

export default EditPasswordPage;
