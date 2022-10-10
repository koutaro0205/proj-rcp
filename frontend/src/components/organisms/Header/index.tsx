import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__inner content-width">
        <h1 className="header__logo">
          <Link href="/" className="header__logo-link">
            ZuboRecipes
          </Link>
        </h1>
        <div className="header__search">サーチフォーム</div>
        <div className="header__menu">
          <ul className="header__menu-list">
            <li className="header__menu-item">
              <Link href="/recipes/new" className="header__menu-link btn">
                レシピを投稿
              </Link>
            </li>
            <li className="header__menu-item">
              <Link href="/" className="header__menu-link btn">
                お気に入り
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <nav className="header__nav">
        <div className="header__nav__inner">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link href="/" className="header__nav-link">
                ホーム
              </Link>
            </li>
            <li className="header__nav-item">
              <Link href="/questions" className="header__nav-link">
                質問一覧
              </Link>
            </li>
            <li className="header__nav-item">
              <Link href="/login" className="header__nav-link">
                ログイン
              </Link>
            </li>
            <li className="header__nav-item">
              <Link href="/users/new/" className="header__nav-link">
                新規登録
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
