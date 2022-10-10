import Link from "next/link";
import React from "react";

import Context from "@/components/layouts/Content";

import styles from "./styles";

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <Context>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/">ホームへ戻る</Link>
          </li>
          <li className={styles.item}>
            <Link href="/categories">カテゴリ追加</Link>
          </li>
        </ul>
        <p className={styles.copyright}>
          Copyright © 2022 Koutaro Inoue All Rights Reserved.
        </p>
      </Context>
    </footer>
  );
};

export default Footer;
