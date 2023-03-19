import { cx } from '@emotion/css';
import NextLink, { LinkProps } from 'next/link';
import React from 'react';

import styles from './styles';

// NextLinkを使った独自のLinkコンポーネント

type Props = {
  children: React.ReactNode;
  className?: string;
} & LinkProps;

const Link: React.FC<Props> = ({ className, children, ...props }) => {
  return (
    <NextLink {...props}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={cx(styles, className)}>{children}</a>
    </NextLink>
  );
};

export default Link;
