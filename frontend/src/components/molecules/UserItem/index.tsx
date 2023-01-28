import React from 'react';

import { User } from '@/@types/data';
import DeleteLink from '@/components/atoms/Button/DeleteButton';
import Divider from '@/components/atoms/Divider';
import LinkText from '@/components/atoms/LinkText';
import UserImage from '@/components/atoms/UserImage';
import { CurrentUser } from '@/features/currentUser/type';
import { isCurrentUser } from '@/utils/match';

import styles from './styles';

type Props = {
  user: User;
  currentUser: CurrentUser;
};

const UserItem: React.FC<Props> = ({ user, currentUser }) => {
  return (
    <li key={user.id} className={styles.container}>
      <UserImage size="large" />
      <LinkText path={`/users/${user.id}`} color="black" size="m">
        {user.name}
      </LinkText>
      {!isCurrentUser(user, currentUser) && (
        <>
          <div className={styles.dividerWrapper}>
            <Divider pattern="vertical" color="black" width="s" />
          </div>
          <div className={styles.deleteButtonWrapper}>
            <DeleteLink onClick={() => {}} label="削除" />
          </div>
          <div className="user__follow">
            フォロー
            {/* FIXME: moleculesでコンポーネント作成（FollowForm） */}
            {/* <FollowForm user={user} userId={user.id} /> */}
          </div>
        </>
      )}
    </li>
  );
};

export default UserItem;
