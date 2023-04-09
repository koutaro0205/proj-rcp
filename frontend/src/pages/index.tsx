import { NextPage } from 'next';
import React from 'react';
import { useDispatch } from 'react-redux';

import { RECIPES_PATH } from '@/common/constants/path';
import { AppDispatch } from '@/common/store';
import LinkText from '@/components/atoms/LinkText';
import Title from '@/components/atoms/Title';
import Inset from '@/components/layouts/Inset';
import { Stack } from '@/components/layouts/Stack';
import Modal from '@/components/molecules/Modal';
import Layout from '@/components/templates/Layout';
import { useCurrentUser } from '@/features/currentUser/useCurrentUser';
import { setIsLoading } from '@/features/globalLoading/slice';

const HomePage: NextPage = () => {
  const dispatch: AppDispatch = useDispatch();
  // ログインユーザーデバッグ

  const { currentUser, isLoggedIn } = useCurrentUser();
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Layout>
      {/* モーダルデバッグ */}
      <button onClick={() => setIsOpen(true)}>モーダルを開く</button>
      <Stack size="s" />
      <button
        onClick={() => {
          dispatch(setIsLoading(true));
          setTimeout(() => dispatch(setIsLoading(false)), 3000);
        }}
      >
        グローバルローディング
      </button>
      <Modal isOpenModal={isOpen} closeModal={() => setIsOpen(false)}>
        <h1>フィジビリ</h1>
        <h1>ログイン状況: {isLoggedIn ? 'ログイン中' : '未ログイン'}</h1>
        <p>ログインユーザー：{currentUser?.name}</p>
        <Stack size="s" />
        <Inset vertical="m">
          <Title>ページ</Title>
        </Inset>
        <LinkText path={RECIPES_PATH} isUnderLine>
          レシピ一覧ページへ
        </LinkText>
      </Modal>
    </Layout>
  );
};

export default HomePage;
