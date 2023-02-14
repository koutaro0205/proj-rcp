import React from 'react';

import { HOME } from '@/common/constants/path';
import IconButton from '@/components/atoms/Button/IconButton';
import Logo from '@/components/atoms/Logo';
import NavItem from '@/components/atoms/NavItem';
import ContentWidth from '@/components/layouts/ContentWidth';
import { Queue } from '@/components/layouts/Queue';
import { SearchForm } from '@/components/molecules/SearchForm';
import Dropdown from '@/components/organisms/Dropdown';
import { SITE_TITLE } from '@/pages/_app';

import { getStyles } from './styles';
import { useHeader } from './useHeader';

const Header: React.FC = () => {
  const { isLoggedIn, currentUser, isSticky } = useHeader();
  const styles = getStyles(isSticky);

  return (
    <header className={styles.container}>
      <ContentWidth>
        <div className={styles.menuContainer}>
          <Logo logoText={SITE_TITLE} path={HOME} />
          <SearchForm />
          <ul className={styles.menuList}>
            <IconButton
              label="レシピを投稿"
              iconName="diet"
              path="/recipes/new"
            />
            <Queue size="m" />
            {isLoggedIn && (
              <IconButton
                label="お気に入り"
                color="favorite"
                path="/recipes/new"
                iconName="favorite"
              />
            )}
          </ul>
        </div>
      </ContentWidth>
      <nav className={styles.navigation}>
        <ul className={styles.navigationList}>
          <NavItem path={HOME}>ホーム</NavItem>
          <NavItem path="/questions">質問一覧</NavItem>
          {isLoggedIn ? (
            <Dropdown currentUser={currentUser} />
          ) : (
            <>
              <NavItem path="/login">ログイン</NavItem>
              <NavItem path="/signup">新規登録</NavItem>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
