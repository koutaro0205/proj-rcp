import React from 'react';

import styles from './styles';

type Props = {
  onClick: () => void;
  followStatus: boolean;
};

const FollowButton: React.FC<Props> = ({ followStatus, onClick }) => {
  if (followStatus) {
    return (
      <button className={styles.followButton} onClick={onClick}>
        フォロー中
      </button>
    );
  }
  return (
    <button className={styles.unfollowButton} onClick={onClick}>
      フォロー中
    </button>
  );
};

export default FollowButton;
