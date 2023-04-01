import { NextPage } from 'next';
import React from 'react';

import SectionTitle from '@/components/atoms/Title/SectionTitle';
import ContentWidth from '@/components/layouts/ContentWidth';
import PostRecipeForm from '@/components/organisms/PostRecipeForm';
import InnerWrapper from '@/components/templates/InnerWrapper';
import Layout from '@/components/templates/Layout';
import { useCurrentUser } from '@/features/currentUser/useCurrentUser';
import { useAuthGaurd } from '@/hooks/useAuthGaurd';

const PostRecipePage: NextPage = () => {
  useAuthGaurd();
  const { isLoggedIn, currentUser } = useCurrentUser();
  return (
    <Layout>
      <ContentWidth>
        {currentUser && isLoggedIn ? (
          <>
            <SectionTitle sectionTitle="レシピ投稿" />
            <InnerWrapper>
              <PostRecipeForm />
            </InnerWrapper>
          </>
        ) : null}
      </ContentWidth>
    </Layout>
  );
};

export default PostRecipePage;
