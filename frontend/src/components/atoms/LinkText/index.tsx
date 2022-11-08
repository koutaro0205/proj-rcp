import { cx } from '@emotion/css';
import Link from 'next/link';
import React from 'react';

import styles from './styles';

type Props = {
  children: React.ReactNode;
  _styles?: any;
  path: string;
};

const LinkText: React.FC<Props> = ({ children, _styles, path }) => {
  return (
    <Link href={path}>
      <div className={cx(styles.link, _styles)}>{children}</div>
    </Link>
  );
};

export default LinkText;
