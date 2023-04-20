import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import { RECIPE_DETAIL_PATH } from '@/common/constants/path';
import { Recipe, RecipeCard } from '@/common/types/data';
import Loading from '@/components/atoms/Loading';
import SectionTitle from '@/components/atoms/Title/SectionTitle';
import ContentWidth from '@/components/layouts/ContentWidth';
import RecipeDetailSection from '@/components/organisms/RecipeDetailSection';
import Layout from '@/components/templates/Layout';
import getAllRecipes from '@/services/recipes/getAllRecipes';
import getRecipe from '@/services/recipes/getRecipe';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const RecipeDetailPage: NextPage<Props> = ({ recipe }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }
  return (
    <Layout>
      <ContentWidth>
        <SectionTitle sectionTitle="レシピ詳細" />
        <RecipeDetailSection recipe={recipe} />
      </ContentWidth>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const recipes = await getAllRecipes();
  // FIXME: RecipeCard→RecipeItemに変更
  const paths = recipes.map((recipe: RecipeCard) =>
    RECIPE_DETAIL_PATH(recipe.id)
  );

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  if (!params) {
    throw new Error('params is undefined');
  }
  const recipeId = Number(params.id);
  const recipe: Recipe = await getRecipe(recipeId);

  return {
    props: {
      recipe,
    },
    revalidate: 10,
  };
};

export default RecipeDetailPage;
