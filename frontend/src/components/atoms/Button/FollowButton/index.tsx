import React from 'react';

import styles from './styles';

type Props = {
  onClick: () => void;
  isFollowing: boolean;
};

const FollowButton: React.FC<Props> = ({ isFollowing, onClick }) => {
  if (isFollowing) {
    return (
      <button className={styles.unfollowButton} onClick={onClick}>
        フォロー中
      </button>
    );
  }
  return (
    <button className={styles.followButton} onClick={onClick}>
      フォロー中
    </button>
  );
};

export default FollowButton;
