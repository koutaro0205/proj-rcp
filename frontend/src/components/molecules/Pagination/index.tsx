import React from 'react';

import { NumberButton } from './NumberButton';
import styles from './styles';
import usePagination from './usePagination';

export type Props = {
  /* 総データ件数 */
  totalDataLength: number;
  /* 現在のページ数 */
  currentPage: number;
  /* 1ページあたりのデータ件数 */
  perPage: number;
};

const Pagination: React.FC<Props> = ({
  totalDataLength,
  currentPage,
  perPage,
}) => {
  const { pageButtonList } = usePagination({
    totalDataLength,
    currentPage,
    perPage,
  });

  return (
    <div className={styles.container}>
      {pageButtonList.map(({ pageNumber, isDisplay }) => (
        <NumberButton
          key={pageNumber}
          pageNumber={pageNumber}
          isSelected={pageNumber === currentPage}
          isDisplay={isDisplay}
        />
      ))}
    </div>
  );
};

export default Pagination;
