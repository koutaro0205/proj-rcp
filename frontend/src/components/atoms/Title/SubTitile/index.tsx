import React from 'react';

import styles from './styles';

type Props = {
  children: React.ReactNode | string;
};

const SubTitle: React.FC<Props> = ({ children }) => {
  return <h2 className={styles.container}>{children}</h2>;
};

export default SubTitle;
