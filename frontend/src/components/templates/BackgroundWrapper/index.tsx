import React from 'react';

import styles from './styles';

type Props = {
  children: React.ReactNode;
};

const BackgroundProvider: React.FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default BackgroundProvider;
