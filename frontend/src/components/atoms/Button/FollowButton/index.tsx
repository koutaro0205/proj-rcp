import React from 'react';

import { ButtonSize, getStyles } from './styles';

type Props = {
  onClick: () => void;
  isFollowing: boolean;
  size?: ButtonSize;
};

const FollowButton: React.FC<Props> = ({
  isFollowing,
  onClick,
  size = 'full',
}) => {
  const styles = getStyles({ isFollowing, size });
  return (
    <button className={styles.button} onClick={onClick}>
      {isFollowing ? 'フォロー中' : 'フォロー'}
    </button>
  );
};

export default FollowButton;
