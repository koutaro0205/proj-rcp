import React from 'react';

import Copyright from '@/components/atoms/Copyright';
import NavItem from '@/components/atoms/NavItem';
import ContextWidth from '@/components/layouts/ContentWidth';

import styles from './styles';

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <ContextWidth>
        <div className={styles.inner}>
          <ul className={styles.list}>
            <NavItem path="/" size="s">
              ホームへ戻る
            </NavItem>
            <NavItem path="/categories" size="s">
              カテゴリ一覧
            </NavItem>
          </ul>
          <Copyright />
        </div>
      </ContextWidth>
    </footer>
  );
};

export default Footer;
