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
            <NavItem path="/" label="ホームへ戻る" size="s" />
            <NavItem path="/categories" label="カテゴリ一覧" size="s" />
          </ul>
          <Copyright />
        </div>
      </ContextWidth>
    </footer>
  );
};

export default Footer;
