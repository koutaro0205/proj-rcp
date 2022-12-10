import { NextPage } from 'next';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import useAccountActivations from '@/components/organisms/AccountActivations/useAccountActivations';
import Layout from '@/components/templates/Layout';
import {
  selectCurrentUser,
  selectIsLoggedIn,
} from '@/features/currentUser/selecters';

// type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>;

const HomePage: NextPage = () => {
  const { handleActivate } = useAccountActivations();
  useEffect(() => {
    handleActivate();
  }, [handleActivate]);

  const currentUser = useSelector(selectCurrentUser);
  const loggedInStatus = useSelector(selectIsLoggedIn);
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
