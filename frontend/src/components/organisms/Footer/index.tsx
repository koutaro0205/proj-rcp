import React from 'react';

import Copyright from '@/components/atoms/Copyright';
import NavItem from '@/components/atoms/NavItem';
import ContentWidth from '@/components/layouts/ContentWidth';

import styles from './styles';

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <ContentWidth>
        <div className={styles.inner}>
          <ul className={styles.list}>
            <NavItem path="/" spacingSize="s">
              ホームへ戻る
            </NavItem>
            <NavItem path="/categories" spacingSize="s">
              カテゴリ一覧
            </NavItem>
          </ul>
          <Copyright />
        </div>
      </ContentWidth>
    </footer>
  );
};

export default Footer;
