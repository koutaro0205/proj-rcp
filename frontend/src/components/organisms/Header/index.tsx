import Link from "next/link";
import React from "react";

import LinkText from "@/components/atoms/LinkText";
import ContextWidth from "@/components/layouts/ContentWidth";
import { SearchForm } from "@/components/molecules/SearchForm";

import styles from "./styles";

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <ContextWidth>
        <div className={styles.inner}>
          <h1 className={styles.logo}>
            <Link href="/">
              <LinkText _styles={styles.logoLink}>ZuboRecipes</LinkText>
            </Link>
          </h1>
          <div className={styles.searchContainer}>
            <SearchForm />
          </div>
          <div>
            <ul className={styles.menuList}>
              <li className={styles.menuItem}>
                <Link href="/recipes/new">
                  <LinkText>レシピを投稿</LinkText>
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="/">
                  <LinkText>お気に入り</LinkText>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </ContextWidth>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/">
                <LinkText _styles={styles.navLink}>ホーム</LinkText>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/questions">
                <LinkText _styles={styles.navLink}>質問一覧</LinkText>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/login" className={styles.navLink}>
                <LinkText _styles={styles.navLink}>ログイン</LinkText>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/users/new/" className={styles.navLink}>
                <LinkText _styles={styles.navLink}>新規登録</LinkText>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
