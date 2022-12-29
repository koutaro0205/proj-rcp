import { NextPage } from 'next';
import React from 'react';

import Text from '@/components/atoms/Text';
import SectionTitle from '@/components/atoms/Title/SectionTitle';
import SubTitle from '@/components/atoms/Title/SubTitile';
import ContentWidth from '@/components/layouts/ContentWidth';
import PasswordResetForm from '@/components/organisms/PasswordResetForm';
import InnerWrapper from '@/components/templates/InnerWrapper';
import Layout from '@/components/templates/Layout';

const PasswordResetPage: NextPage = () => {
  return (
    <Layout>
      <ContentWidth>
        <SectionTitle sectionTitle="パスワード再設定" />
        <InnerWrapper>
          <SubTitle>パスワードをお忘れの方</SubTitle>
          <Text lineHeight="extraLarge" textAlign="center">
            パスワードの再設定を行います。
            <br />
            登録した覚えのあるメールアドレスを入力してください。
          </Text>
          <PasswordResetForm />
        </InnerWrapper>
      </ContentWidth>
    </Layout>
  );
};

export default PasswordResetPage;
