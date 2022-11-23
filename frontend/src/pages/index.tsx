import { NextPage } from 'next';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '@/common/store';
import useAccountActivations from '@/components/organisms/AccountActivations/useAccountActivations';
import Layout from '@/components/templates/Layout';
import {
  fetchCurrentUser,
  selectCurrentUser,
  selectLoggedInStatus,
} from '@/features/currentUserSlice';

// type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>;

const HomePage: NextPage = () => {
  const { handleActivate } = useAccountActivations();
  useEffect(() => {
    handleActivate();
  }, [handleActivate]);

  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const currentUser = useSelector(selectCurrentUser);
  const loggedInStatus = useSelector(selectLoggedInStatus);
  // 表示テストも兼ねて、暫定実装（スタイルはあてていない）
  return (
    <Layout>
      <h1>ログイン状況: {loggedInStatus ? 'ログイン中' : '未ログイン'}</h1>
      <p>ログインユーザー：{currentUser?.name}</p>
    </Layout>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   const context: ApiContext = {
//     apiRootUrl: ROOT_URL,
//   };
//   const users = await getAllUsers(context);

//   return {
//     props: {
//       users,
//     },
//   };
// };

export default HomePage;
