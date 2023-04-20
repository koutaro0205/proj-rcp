import { NextPage } from 'next';
import React from 'react';
import useSWR from 'swr';

import { FAVORITE_RECIPES_REQUEST_PATH } from '@/common/constants/path';
import { RecipeCard } from '@/common/types/data';
import SectionTitle from '@/components/atoms/Title/SectionTitle';
import ContentWidth from '@/components/layouts/ContentWidth';
import RecipeList from '@/components/organisms/RecipeList';
import Layout from '@/components/templates/Layout';
import { useAuthGaurd } from '@/hooks/useAuthGaurd';
import { fetcher } from '@/utils/fetchData';

const FavoritesPage: NextPage = () => {
  useAuthGaurd();

  const { data } = useSWR(FAVORITE_RECIPES_REQUEST_PATH, fetcher);
  const recipes: RecipeCard[] = data || [];

  return (
    <Layout>
      <ContentWidth>
        <SectionTitle sectionTitle="お気に入りレシピ一覧" />
        <RecipeList recipes={recipes} />
      </ContentWidth>
    </Layout>
  );
};

export default FavoritesPage;
