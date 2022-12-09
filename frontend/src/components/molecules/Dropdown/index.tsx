import { cx } from '@emotion/css';
import React from 'react';

import LinkText from '@/components/atoms/LinkText';

import styles from './styles';
import useDropdown from './useDropdown';

// FIXME: Dropdownコンポーネントを適切な粒度に分割する
const Dropdown: React.FC = () => {
  const { isOpen, dropdownRef, currentUser, handleClick, handleLogoutClick } =
    useDropdown();
  return (
    <li className={cx(styles.container, styles.dropdown)} ref={dropdownRef}>
      <button
        className={styles.dropdownMenu}
        onClick={handleClick}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {currentUser?.name}
      </button>

      {isOpen && (
        <ul className={styles.dropdownList}>
          <li className={styles.dropdownItem}>
            <LinkText path={`/users/${currentUser.id}`}>登録情報</LinkText>
          </li>
          <li className={styles.dropdownItem}>
            <LinkText path={`/users/${currentUser.id}/edit`}>
              ユーザー編集
            </LinkText>
          </li>
          <li className={styles.dropdownItem}>
            <LinkText path="/users">ユーザー一覧</LinkText>
          </li>
          <li className={styles.dropdownItem}>
            <span
              onClick={handleLogoutClick}
              role="presentation"
              className={styles.logout}
            >
              ログアウト
            </span>
          </li>
        </ul>
      )}
    </li>
  );
};

export default Dropdown;
