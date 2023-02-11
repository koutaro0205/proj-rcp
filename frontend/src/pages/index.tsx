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
  // ログインユーザーデバッグ
  const currentUser = useSelector(selectCurrentUser);
  const loggedInStatus = useSelector(selectIsLoggedIn);
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Layout>
      {/* スクロール幅を確保（スクロール時の動作確認用） */}
      <div style={{ paddingBottom: 1200 }}>
        {/* モーダルデバッグ */}
        <button onClick={() => setIsOpen(true)}>モーダルを開く</button>
        <Modal isOpenModal={isOpen} closeModal={() => setIsOpen(false)}>
          <h1>ログイン状況: {loggedInStatus ? 'ログイン中' : '未ログイン'}</h1>
          <Stack size="xxl" />
          <p>ログインユーザー：{currentUser?.name}</p>
        </Modal>
      </div>
    </Layout>
  );
};

export default HomePage;
