import React from 'react';

import styles from './styles';

type Props = {
  message: string;
};

const Explanation: React.FC<Props> = ({ message }) => {
  return <p className={styles.message}>{message}</p>;
};

export default Explanation;
