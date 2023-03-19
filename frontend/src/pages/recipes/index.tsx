import { InferGetStaticPropsType, NextPage } from 'next';
import React from 'react';

import { RecipeCard } from '@/common/types/data';
import SectionTitle from '@/components/atoms/Title/SectionTitle';
import ContentWidth from '@/components/layouts/ContentWidth';
import RecipeList from '@/components/organisms/RecipeList';
import Layout from '@/components/templates/Layout';
import getAllRecipes from '@/services/recipes/getAllRecipes';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const RecipesPage: NextPage<Props> = ({ recipes }) => {
  return (
    <Layout>
      <ContentWidth>
        <SectionTitle sectionTitle="レシピ一覧" />
        <RecipeList recipes={recipes} />
      </ContentWidth>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const recipes: RecipeCard[] = await getAllRecipes();

  return {
    props: {
      recipes,
    },
    revalidate: 10,
  };
};

export default RecipesPage;
