import { cx } from '@emotion/css';
import Link from 'next/link';
import React from 'react';

import styles from './styles';

type Props = {
  children: React.ReactNode;
  // NOTE: 渡される方が不明確なのでanyで対応
  // eslint-disable-next-line react/require-default-props
  _styles?: any;
  path: string;
};

const LinkText = ({ children, _styles, path }: Props) => {
  return (
    <Link href={path}>
      <div className={cx(styles.link, _styles)}>{children}</div>
    </Link>
  );
};

export default LinkText;
