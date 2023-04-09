import { InferGetStaticPropsType, NextPage } from 'next';
import React from 'react';

import { Category } from '@/common/types/data';
import SectionTitle from '@/components/atoms/Title/SectionTitle';
import ContentWidth from '@/components/layouts/ContentWidth';
import PostRecipeForm from '@/components/organisms/PostRecipeForm';
import InnerWrapper from '@/components/templates/InnerWrapper';
import Layout from '@/components/templates/Layout';
import { useCurrentUser } from '@/features/currentUser/useCurrentUser';
import { useAuthGaurd } from '@/hooks/useAuthGaurd';
import { getAllCategories } from '@/services/categories/getAllCategories';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const PostRecipePage: NextPage<Props> = ({ categories }) => {
  useAuthGaurd();
  const { isLoggedIn, currentUser } = useCurrentUser();
  return (
    <Layout>
      <ContentWidth>
        {currentUser && isLoggedIn ? (
          <>
            <SectionTitle sectionTitle="レシピ投稿" />
            <InnerWrapper>
              <PostRecipeForm categories={categories} />
            </InnerWrapper>
          </>
        ) : null}
      </ContentWidth>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const categories: Category[] = await getAllCategories();

  return {
    props: {
      categories,
    },
    revalidate: 10,
  };
};

export default PostRecipePage;
