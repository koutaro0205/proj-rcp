import { cx } from '@emotion/css';
import React from 'react';

import styles from './styles';

type Props = {
  children: React.ReactNode;
  _styles?: any;
};

const Text: React.FC<Props> = ({ children, _styles }) => {
  return <p className={cx(styles.text, _styles)}>{children}</p>;
};

export default Text;
