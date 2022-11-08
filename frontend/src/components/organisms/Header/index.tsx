import React from 'react';

import HeaderButton from '@/components/atoms/HeaderButton';
import Logo from '@/components/atoms/Logo';
import NavItem from '@/components/atoms/NavItem';
import ContextWidth from '@/components/layouts/ContentWidth';
import { SearchForm } from '@/components/molecules/SearchForm';
import { SITE_TITLE } from '@/pages/_app';

import styles from './styles';

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <ContextWidth>
        <div className={styles.inner}>
          <Logo logoText={SITE_TITLE} path="/" />
          <SearchForm />
          <ul className={styles.menuList}>
            <HeaderButton label="レシピを投稿" path="/recipes/new" />
            <HeaderButton label="お気に入り" path="/recipes/new" />
          </ul>
        </div>
      </ContextWidth>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <ul className={styles.navList}>
            <NavItem label="ホーム" path="/" />
            <NavItem label="質問一覧" path="/questions" />
            <NavItem label="ログイン" path="/login" />
            <NavItem label="新規登録" path="/signup" />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
