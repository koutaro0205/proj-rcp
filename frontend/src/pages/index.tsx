import { NextPage } from 'next';
import React from 'react';
import { useSelector } from 'react-redux';

import { Stack } from '@/components/layouts/Stack';
import Modal from '@/components/molecules/Modal';
import Layout from '@/components/templates/Layout';
import {
  selectCurrentUser,
  selectIsLoggedIn,
} from '@/features/currentUser/selecters';

const HomePage: NextPage = () => {
  const currentUser = useSelector(selectCurrentUser);
  const loggedInStatus = useSelector(selectIsLoggedIn);
  const [isOpen, setIsOpen] = React.useState(false);
  // 表示テストも兼ねて、暫定実装（スタイルはあてていない）
  return (
    <Layout>
      <Stack size="xxl" />
      <button onClick={() => setIsOpen(true)}>モーダルを開く</button>
      <Modal isOpenModal={isOpen} closeModal={() => setIsOpen(false)}>
        <h1>ログイン状況: {loggedInStatus ? 'ログイン中' : '未ログイン'}</h1>
        <Stack size="xxl" />
        <p>ログインユーザー：{currentUser?.name}</p>
      </Modal>
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
      <Stack size="xxl" />
      <Stack size="xxl" isDebugHighlight />
    </Layout>
  );
};

export default HomePage;
