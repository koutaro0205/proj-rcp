import React from 'react';

import Icon from '@/components/atoms/Icon';
import { Queue } from '@/components/layouts/Queue';
import { Color } from '@/theme/colors';

import { getStyles } from './styles';

// FIXME: サイズを追加する。
type Props = {
  isLiked: boolean;
  onClick: () => void;
  likeCount: number;
  backgroundColor?: Color;
};

const LikeCountButton: React.FC<Props> = ({
  onClick,
  likeCount,
  backgroundColor = 'white',
  isLiked,
}) => {
  const styles = getStyles({ backgroundColor, isLiked });
  return (
    <button onClick={onClick} className={styles.container}>
      <Icon name="LIKE" size="m" stroke="PrimaryColor" />
      <Queue size="xs" />
      <span className={styles.likeCountContainer}>
        <span className={styles.likeLabel}>お気に入り</span>
        <span>{likeCount}</span>
      </span>
    </button>
  );
};

export default LikeCountButton;
