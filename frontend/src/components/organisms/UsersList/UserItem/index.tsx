import React from 'react';

import { User } from '@/common/types/data';
import DeleteButton from '@/components/atoms/Button/DeleteButton';
import Divider from '@/components/atoms/Divider';
import LinkText from '@/components/atoms/LinkText';
import UserImage from '@/components/atoms/UserImage';
import { CurrentUser } from '@/features/currentUser/type';
import { isAdminUser, isCurrentUser } from '@/utils/match';

import FollowUserButton from './FollowUserButton';
import styles from './styles';

type Props = {
  user: User;
  currentUser: CurrentUser;
  onClickDelete: () => void;
};

const UserItem: React.FC<Props> = ({ user, currentUser, onClickDelete }) => {
  return (
    <li key={user.id} className={styles.container}>
      <UserImage size="large" imagePath={user.image_url || undefined} />
      <LinkText path={`/users/${user.id}`} color="black" size="m">
        {user.name}
      </LinkText>
      {!isCurrentUser(user, currentUser) && (
        <>
          {isAdminUser(currentUser) && (
            <>
              <div className={styles.dividerWrapper}>
                <Divider pattern="vertical" color="black" width="s" />
              </div>
              <div className={styles.deleteButtonWrapper}>
                <DeleteButton onClick={onClickDelete} label="削除" />
              </div>
            </>
          )}
          <div className={styles.followButtonWrapper}>
            <FollowUserButton user={user} />
          </div>
        </>
      )}
    </li>
  );
};

export default UserItem;
