import { cx } from '@emotion/css';
import Link from 'next/link';
import React from 'react';

import styles from './styles';

type Props = {
  children: React.ReactNode | string;
  _styles?: any;
  path: string;
};

const LinkText: React.FC<Props> = ({ children, _styles, path }) => {
  return (
    <Link href={path}>
      <span className={cx(styles.link, _styles)}>{children}</span>
    </Link>
  );
};

export default LinkText;
