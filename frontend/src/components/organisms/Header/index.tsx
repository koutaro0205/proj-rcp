import Link from "next/link";
import React from "react";

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
              <span className={styles.logoLink}>ZuboRecipes</span>
            </Link>
          </h1>
          <div className={styles.searchContainer}>
            <SearchForm />
          </div>
          <div>
            <ul className={styles.menuList}>
              <li className={styles.menuItem}>
                <Link href="/recipes/new">
                  <span>レシピを投稿</span>
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="/">
                  <span>お気に入り</span>
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
                <span className={styles.navLink}>ホーム</span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/questions">
                <span className={styles.navLink}>質問一覧</span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/login" className={styles.navLink}>
                <span className={styles.navLink}>ログイン</span>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/users/new/" className={styles.navLink}>
                <span className={styles.navLink}>新規登録</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
