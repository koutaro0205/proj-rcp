import React from 'react';

import Link from '@/components/atoms/Link';

import { GetStyleInput, getStyles } from './styles';

type Props = {
  children: React.ReactNode | string;
  path: string;
} & Partial<GetStyleInput>;

// FIXME: Nextのアップデートを行なって<Link>コンポーネントを改善する。
const LinkText: React.FC<Props> = ({
  children,
  path,
  isUnderLine = false,
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
    <Link href={path} className={styles.linkText}>
      {children}
    </Link>
  );
};

export default LinkText;
