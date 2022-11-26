import React from 'react';

import { User } from '@/@types/data';
import LinkText from '@/components/atoms/LinkText';
import UserImage from '@/components/atoms/UserImage';
import { CurrentUser } from '@/features/currentUserSlice';
import { isCurrentUser } from '@/utils/match';

import styles from './styles';

type Props = {
  user: User;
  currentUser: CurrentUser;
};

const UserItem: React.FC<Props> = ({ user, currentUser }) => {
  return (
    <li key={user.id} className={styles.container}>
      <UserImage />
      <LinkText path={`/users/${user.id}`} _styles={styles.userName}>
        {user.name}
      </LinkText>
      {!isCurrentUser(user, currentUser) && (
        <div className={styles.deleteLink}>
          <span>削除</span>
        </div>
      )}
      {!isCurrentUser(user, currentUser) && (
        <div className="user__follow">
          フォロー
          {/* <FollowForm user={user} userId={user.id} /> */}
        </div>
      )}
    </li>
  );
};

export default UserItem;
