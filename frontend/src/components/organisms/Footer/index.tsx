import Link from "next/link";
import React from "react";

import ContextWidth from "@/components/layouts/ContentWidth";

import styles from "./styles";

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <ContextWidth>
        <div className={styles.inner}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link href="/">
                <span>ホームへ戻る</span>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="/categories">
                <span>カテゴリ一覧</span>
              </Link>
            </li>
          </ul>
          <p className={styles.copyright}>
            Copyright © 2022 Koutaro Inoue All Rights Reserved.
          </p>
        </div>
      </ContextWidth>
    </footer>
  );
};

export default Footer;
