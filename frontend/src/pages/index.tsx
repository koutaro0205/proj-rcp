import { NextPage } from 'next';
import React from 'react';
import useSWR from 'swr';

import { RECIPES_PATH } from '@/common/constants/path';
import { RecipeCard } from '@/common/types/data';
import SectionTitle from '@/components/atoms/Title/SectionTitle';
import ContentWidth from '@/components/layouts/ContentWidth';
import RecipeList from '@/components/organisms/RecipeList';
import Layout from '@/components/templates/Layout';
import { useCurrentUser } from '@/features/currentUser/useCurrentUser';
import { fetcher } from '@/utils/fetchData';

const HomePage: NextPage = () => {
  const { data } = useSWR(RECIPES_PATH, fetcher);
  const recipes: RecipeCard[] = data || [];

  const { currentUser, isLoggedIn } = useCurrentUser();
  return (
    <Layout>
      <ContentWidth>
        <SectionTitle sectionTitle="レシピ一覧" />
        <RecipeList recipes={recipes} />
      </ContentWidth>
      <div
        style={{
          backgroundColor: '#f2f2f2',
          padding: 12,
          margin: 30,
          borderRadius: '5px',
        }}
      >
        <h1>フィジビリ</h1>
        <h1>ログイン状況: {isLoggedIn ? 'ログイン中' : '未ログイン'}</h1>
        <p>ログインユーザー：{currentUser?.name}</p>
      </div>
    </Layout>
  );
};

export default HomePage;
