import React from 'react';

import { User } from '@/@types/data';
import DeleteButton from '@/components/atoms/Button/DeleteButton';
import FollowButton from '@/components/atoms/Button/FollowButton';
import Divider from '@/components/atoms/Divider';
import LinkText from '@/components/atoms/LinkText';
import UserImage from '@/components/atoms/UserImage';
import { CurrentUser } from '@/features/currentUser/type';
import { isAdminUser, isCurrentUser } from '@/utils/match';

import styles from './styles';

type Props = {
  user: User;
  currentUser: CurrentUser;
  isFollowing: boolean;
  onClickDelete: () => void;
  onClickToggleFollow: () => void;
};

const UserItem: React.FC<Props> = ({
  user,
  currentUser,
  isFollowing,
  onClickDelete,
  onClickToggleFollow,
}) => {
  return (
    <li key={user.id} className={styles.container}>
      <UserImage size="large" />
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
            {/* FIXME: moleculesでコンポーネント作成（FollowForm） */}
            {/* <FollowForm user={user} userId={user.id} /> */}
            <FollowButton
              onClick={onClickToggleFollow}
              isFollowing={isFollowing}
              size="normal"
            />
          </div>
        </>
      )}
    </li>
  );
};

export default UserItem;
