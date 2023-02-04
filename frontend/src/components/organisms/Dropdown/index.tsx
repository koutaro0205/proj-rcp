import React from 'react';

import {
  USERS_PATH,
  USER_EDIT_PATH,
  USER_DETAIL_PATH,
} from '@/common/constants/path';
import DropdownItem from '@/components/atoms/DropdownItem';
import { CurrentUser } from '@/features/currentUser/type';

import styles from './styles';
import useDropdown from './useDropdown';

type Props = {
  currentUser: CurrentUser;
};

const Dropdown: React.FC<Props> = ({ currentUser }) => {
  const { isOpen, dropdownRef, handleClick, handleLogoutClick } = useDropdown();
  return (
    <li className={styles.container} ref={dropdownRef}>
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
          <DropdownItem
            path={USER_DETAIL_PATH(currentUser.id)}
            label="登録情報"
          />
          <DropdownItem
            path={USER_EDIT_PATH(currentUser.id)}
            label="ユーザー編集"
          />
          <DropdownItem path={USERS_PATH} label="ユーザー一覧" />
          <DropdownItem
            label="ログアウト"
            onClick={handleLogoutClick}
            _styles={styles.logout}
          />
        </ul>
      )}
    </li>
  );
};

export default Dropdown;
