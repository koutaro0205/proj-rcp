import { NextPage } from 'next';
import React from 'react';

import SectionTitle from '@/components/atoms/Title/SectionTitle';
import ContentWidth from '@/components/layouts/ContentWidth';
import PostRecipeForm from '@/components/organisms/PostRecipeForm';
import InnerWrapper from '@/components/templates/InnerWrapper';
import Layout from '@/components/templates/Layout';
import { useAuthGaurd } from '@/hooks/useAuthGaurd';

const PostRecipePage: NextPage = () => {
  const { currentUser } = useAuthGaurd();
  return (
    <Layout>
      <ContentWidth>
        <SectionTitle sectionTitle="レシピ投稿" />
        <InnerWrapper>
          <PostRecipeForm />
        </InnerWrapper>
      </ContentWidth>
    </Layout>
  );
};

export default PostRecipePage;
