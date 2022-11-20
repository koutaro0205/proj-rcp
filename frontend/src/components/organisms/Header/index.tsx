import React from 'react';
import { useSelector } from 'react-redux';

import HeaderButton from '@/components/atoms/HeaderButton';
import Logo from '@/components/atoms/Logo';
import NavItem from '@/components/atoms/NavItem';
import ContextWidth from '@/components/layouts/ContentWidth';
import Dropdown from '@/components/molecules/Dropdown';
import { SearchForm } from '@/components/molecules/SearchForm';
import { selectLoggedInStatus } from '@/features/currentUserSlice';
import { SITE_TITLE } from '@/pages/_app';

import styles from './styles';

const Header: React.FC = () => {
  const isLoggedIn = useSelector(selectLoggedInStatus);
  return (
    <header className={styles.container}>
      <ContextWidth>
        <div className={styles.inner}>
          <Logo logoText={SITE_TITLE} path="/" />
          <SearchForm />
          <ul className={styles.menuList}>
            <HeaderButton label="レシピを投稿" path="/recipes/new" />
            {isLoggedIn && (
              <HeaderButton label="お気に入り" path="/recipes/new" />
            )}
          </ul>
        </div>
      </ContextWidth>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <ul className={styles.navList}>
            <NavItem path="/">ホーム</NavItem>
            <NavItem path="/questions">質問一覧</NavItem>
            {isLoggedIn ? (
              <Dropdown />
            ) : (
              <>
                <NavItem path="/login">ログイン</NavItem>
                <NavItem path="/signup">新規登録</NavItem>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
