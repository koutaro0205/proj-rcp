import React from 'react';

import Link from '@/components/atoms/Link';

import { getStyles } from './styles';

type Props = {
  pageNumber: number;
  isSelected: boolean;
  isDisplay: boolean;
};

export const NumberButton: React.FC<Props> = ({
  pageNumber,
  isSelected,
  isDisplay,
}) => {
  const styles = getStyles(isSelected);
  return (
    <div className={styles.container}>
      {isDisplay ? (
        <div className={styles.content}>
          <Link href={`?page=${pageNumber}`} className={styles.link}>
            {pageNumber}
          </Link>
        </div>
      ) : (
        <span key={pageNumber}>…</span>
      )}
    </div>
  );
};
