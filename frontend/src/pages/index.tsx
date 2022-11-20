import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { User, ApiContext } from '@/@types/data';
import { ROOT_URL } from '@/common/constants/url';
import { AppDispatch } from '@/common/store';
import Layout from '@/components/templates/Layout';
import {
  fetchCurrentUser,
  selectCurrentUser,
  selectLoggedInStatus,
} from '@/features/currentUserSlice';
import getAllUsers from '@/services/users/getAllUsers';

type HomePageProps = InferGetStaticPropsType<typeof getStaticProps>;

const HomePage: NextPage<HomePageProps> = ({ users }: HomePageProps) => {
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const currentUser = useSelector(selectCurrentUser);
  const loggedInStatus = useSelector(selectLoggedInStatus);
  // 表示テストも兼ねて、暫定実装（スタイルはあてていない）
  return (
    <Layout>
      <h1>登録ユーザー一覧</h1>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            {user.id} - {user.name} - {user.email}
          </li>
        ))}
      </ul>
      <h1>ログイン状況: {loggedInStatus ? 'ログイン中' : '未ログイン'}</h1>
      <p>ログインユーザー：{currentUser?.name}</p>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const context: ApiContext = {
    apiRootUrl: ROOT_URL,
  };
  const users = await getAllUsers(context);

  return {
    props: {
      users,
    },
  };
};

export default HomePage;
