import React from 'react';

import { User } from '@/@types/data';
import DeleteLink from '@/components/atoms/DeleteLink';
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
      <LinkText path={`/users/${user.id}`} _styles={styles.userName}>
        {user.name}
      </LinkText>
      {!isCurrentUser(user, currentUser) && (
        <DeleteLink onClick={() => {}} _styles={styles.deleteLink}>
          削除
        </DeleteLink>
      )}
      {!isCurrentUser(user, currentUser) && (
        <div className="user__follow">
          フォロー
          {/* FIXME: moleculesでコンポーネント作成（FollowForm） */}
          {/* <FollowForm user={user} userId={user.id} /> */}
        </div>
      )}
    </li>
  );
};

export default UserItem;
