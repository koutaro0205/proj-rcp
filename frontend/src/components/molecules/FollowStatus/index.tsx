import React from 'react';

import LinkText from '@/components/atoms/LinkText';

import styles from './styles';

type Props = {
  // FIXME: フォロー機能実装後にオプショナルを外す
  followerCount?: number;
  followingCount?: number;
  userId: number;
};

const FollowStatus: React.FC<Props> = ({
  followerCount = 0,
  followingCount = 0,
  userId,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.followingWrapper}>
        <p className={styles.followCount}>{followingCount}</p>
        <LinkText path={`/users/${userId}/following`}>フォロー</LinkText>
      </div>
      <div className={styles.followerWrapper}>
        <p className={styles.followCount}>{followerCount}</p>
        <LinkText path={`/users/${userId}/follower`}>フォロワー</LinkText>
      </div>
      <div />
    </div>
  );
};

export default FollowStatus;
