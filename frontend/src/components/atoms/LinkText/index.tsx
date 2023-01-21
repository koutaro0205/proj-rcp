import { cx } from '@emotion/css';
import Link from 'next/link';
import React from 'react';

import styles from './styles';

type Props = {
  children: React.ReactNode | string;
  _styles?: string;
  path: string;
};

// FIXME: Nextのアップデートを行なって<Link>コンポーネントを改善する。
const LinkText: React.FC<Props> = ({ children, _styles, path }) => {
  return (
    <Link href={path} legacyBehavior>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={cx(styles.link, _styles)}>{children}</a>
    </Link>
  );
};

export default LinkText;
