import { useCallback, useMemo } from 'react';

import { ITEMS_PER_PAGE, MAX_PAGE_COUNT } from '@/common/constants/characters';

type PageButton = {
  pageNumber: number;
  isDisplay: boolean;
};

type Args = {
  totalDataLength: number;
  currentPage: number;
  perPage?: number;
};

const usePagination = ({
  totalDataLength,
  currentPage,
  perPage = ITEMS_PER_PAGE,
}: Args) => {
  const pageLength = Math.ceil(totalDataLength / perPage);

  // NOTE: pageButtonとして表示(display)するかを判定
  const getIsDisplay = useCallback(
    (pageNumber: number): boolean =>
      pageNumber === 1 ||
      pageNumber === pageLength ||
      (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1) ||
      (currentPage <= 2 && pageNumber <= 4) ||
      (currentPage >= pageLength - 1 && pageNumber >= pageLength - 3),
    [currentPage, pageLength]
  );

  // NOTE: 不要なpageButtonを削除する。
  const reduceExtraPageButton = useCallback(
    (pageButtonList: PageButton[]): PageButton[] => {
      const reducedPageButtonList = pageButtonList.filter(
        ({ pageNumber, isDisplay }) =>
          pageNumber === 2 || pageNumber === pageLength - 1 || isDisplay
      );
      return reducedPageButtonList;
    },
    [pageLength]
  );

  // NOTE: page数分のpageButtonの生成。
  const initialPageButtonList: PageButton[] = useMemo(
    () =>
      [...Array(pageLength)].map((_, i) => {
        const pageNumber = i + 1 >= MAX_PAGE_COUNT ? MAX_PAGE_COUNT : i + 1;
        return { pageNumber, isDisplay: getIsDisplay(pageNumber) };
      }),
    [getIsDisplay, pageLength]
  );

  // NOTE: ページ数分のpageButtonを生成してから、不要なpageButtonを削除する。
  const pageButtonList = useMemo(
    () => reduceExtraPageButton(initialPageButtonList),
    [initialPageButtonList, reduceExtraPageButton]
  );

  return { pageButtonList, currentPage };
};

export default usePagination;
