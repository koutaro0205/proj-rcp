import { NextPage } from 'next';
import React from 'react';
import { useSelector } from 'react-redux';

import { Stack } from '@/components/layouts/Stack';
import Layout from '@/components/templates/Layout';
import {
  selectCurrentUser,
  selectIsLoggedIn,
} from '@/features/currentUser/selecters';

// type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>;

const HomePage: NextPage = () => {
  const currentUser = useSelector(selectCurrentUser);
  const loggedInStatus = useSelector(selectIsLoggedIn);
  // 表示テストも兼ねて、暫定実装（スタイルはあてていない）
  return (
    <Layout>
      <Stack size="xxl" />
      <h1>ログイン状況: {loggedInStatus ? 'ログイン中' : '未ログイン'}</h1>
      <p>ログインユーザー：{currentUser?.name}</p>
      <Stack size="xxl" isDebugHighlight />
      <Stack size="xxl" />
      <Stack size="xxl" isDebugHighlight />
      <Stack size="xxl" />
      <Stack size="xxl" isDebugHighlight />
      <Stack size="xxl" />
      <Stack size="xxl" isDebugHighlight />
      <Stack size="xxl" />
      <Stack size="xxl" isDebugHighlight />
      <Stack size="xxl" />
      <Stack size="xxl" isDebugHighlight />
      <Stack size="xxl" />
      <Stack size="xxl" isDebugHighlight />
      <Stack size="xxl" />
      <Stack size="xxl" isDebugHighlight />
    </Layout>
  );
};

export default HomePage;
