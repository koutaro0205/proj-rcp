import { useRouter } from 'next/router';
import { useState, useEffect, useMemo } from 'react';

import { isEmptyObject } from '@/utils/match';

export const DATA_LIST_PAGE_OFFSET = 15;
export type DataPattern = 'article';

/**
 * URLのクエリパラメータを返す
 * @param params クエリパラメータ
 */
export type Params = {
  [key: string]: string | string[] | undefined;
};

const useQueryParameters = () => {
  /**
   * クエリパラメータを所得
   * @params クエリパラメーターをオブジェクトで返す。
   */
  const [params, setParams] = useState<Params>();
  const router = useRouter();
  const { query } = router;
  useEffect(() => {
    if (router.isReady && !isEmptyObject(query)) {
      setParams({ ...query });
    }
  }, [query, router.isReady]);

  /**
   * ページネーション
   * @page 何ページ目か
   * @offset 特定のページにおけるデータの開始位置
   * @getNextLink 次のhrefを組み立てる
   */
  const queryParam: {
    page?: string;
    redirectTo?: string;
  } = query;

  const page = parseInt(queryParam?.page || '1', 10);
  const redirectTo = queryParam?.redirectTo;
  const offset = (page - 1) * DATA_LIST_PAGE_OFFSET;

  /**
   * 検索パラメータ
   * @searchParams 検索URLのパラメータを返す
   */
  // FIXME 他に管理する項目が増えた時に複雑になる
  const searchParams = useMemo(() => {
    if (page > 1) {
      return `page=${page}`;
    }

    return undefined;
  }, [page]);

  return {
    params,
    page,
    offset,
    searchParams,
    redirectTo,
  };
};

export default useQueryParameters;
