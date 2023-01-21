import Link from 'next/link';
import React from 'react';

import { GetStyleInput, getStyles } from './styles';

type Props = {
  children: React.ReactNode | string;
  path: string;
} & Partial<GetStyleInput>;

// FIXME: Nextのアップデートを行なって<Link>コンポーネントを改善する。
const LinkText: React.FC<Props> = ({
  children,
  path,
  isUnderLine,
  size,
  weight,
  lineHeight,
  color,
  hasHoverAction,
}) => {
  const styles = getStyles({
    isUnderLine,
    size,
    weight,
    lineHeight,
    color,
    hasHoverAction,
  });
  return (
    <Link href={path}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={styles.linkText}>{children}</a>
    </Link>
  );
};

export default LinkText;
