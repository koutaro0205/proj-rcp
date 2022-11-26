import React from 'react';

import { User } from '@/@types/data';
import DeleteLink from '@/components/atoms/DeleteLink';
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
        <DeleteLink
          onClick={() => console.log('削除！！')}
          _styles={styles.deleteLink}
        >
          削除
        </DeleteLink>
      )}
      {!isCurrentUser(user, currentUser) && (
        // FIXME: moleculesでコンポーネント作成
        <div className="user__follow">
          フォロー
          {/* <FollowForm user={user} userId={user.id} /> */}
        </div>
      )}
    </li>
  );
};

export default UserItem;
