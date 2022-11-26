import React from 'react';

import styles from './styles';

type Props = {
  userName: string;
  postCount: number;
};

const CurrentUserInfo: React.FC<Props> = ({ userName, postCount = 0 }) => {
  return (
    <div className={styles.container}>
      <p className={styles.userName}>{userName}</p>
      <p className={styles.postsCount}>投稿数: {postCount}</p>
    </div>
  );
};

export default CurrentUserInfo;
