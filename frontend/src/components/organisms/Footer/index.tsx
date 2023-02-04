import React from 'react';

import { HOME } from '@/common/constants/path';
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
            <NavItem path={HOME} size="xs">
              ホームへ戻る
            </NavItem>
            {/* FIXME: パスをconstantsに切り出す。 */}
            <NavItem path="/categories" size="xs">
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
