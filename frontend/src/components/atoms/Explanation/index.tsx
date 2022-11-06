import React from 'react';

import styles from './styles';

type Props = {
  message: string;
};

const Explanation = ({ message }: Props) => {
  return <p className={styles.message}>{message}</p>;
};

export default Explanation;
