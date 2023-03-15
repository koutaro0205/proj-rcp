import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { useRouter } from 'next/router';
import React from 'react';

import { RECIPE_DETAIL_PATH } from '@/common/constants/path';
import Loading from '@/components/atoms/Loading';
import SectionTitle from '@/components/atoms/Title/SectionTitle';
import ContentWidth from '@/components/layouts/ContentWidth';
import RecipeDetailSection from '@/components/organisms/RecipeDetailSection';
import Layout from '@/components/templates/Layout';
import getAllRecipes from '@/services/recipes/getAllRecipes';
import getRecipe from '@/services/recipes/getRecipe';
import { formatDate } from '@/utils/date';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const RecipeDetailPage: NextPage<Props> = ({ recipe }) => {
  const router = useRouter();

  // FIXME: 暫定
  if (router.isFallback) {
    return <Loading />;
  }
  return (
    <Layout>
      <ContentWidth>
        <SectionTitle sectionTitle="レシピ詳細" />
        <RecipeDetailSection
          recipeTitle={recipe.title}
          imageUrl={recipe.image_url}
          cookTime={recipe.cook_time}
          cost={recipe.cost}
          postDate={formatDate(recipe.updated_at)}
          servingSize={recipe.serving_size}
          recipeIngredients={recipe.recipe_ingredients}
          recipeSteps={recipe.recipe_steps}
        />
      </ContentWidth>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const recipes = await getAllRecipes();
  // FIXME: 型を修正する。
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const paths = recipes.map((recipe: any) => RECIPE_DETAIL_PATH(recipe.id));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  if (!params) {
    throw new Error('params is undefined');
  }
  const recipeId = Number(params.id);
  // FIXME: 型を修正する。
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recipe: any = await getRecipe(recipeId);

  return {
    props: {
      recipe,
    },
    revalidate: 10,
  };
};

export default RecipeDetailPage;
