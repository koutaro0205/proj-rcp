import Link from 'next/link';
import React from 'react';

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
          <Link href={`?page=${pageNumber}`}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className={styles.link}>{pageNumber}</a>
          </Link>
        </div>
      ) : (
        <span key={pageNumber}>…</span>
      )}
    </div>
  );
};
