import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { isEmptyObject } from '@/utils/match';

/**
 * URLのクエリパラメータを取得
 * @param params クエリパラメータ
 * @param setParams クエリパラメータの状態を更新
 * @returns params クエリパラメータの値(オブジェクト)
 */
type Params = {
  [key: string]: string | string[] | undefined;
};

const useGetQueryParameters = () => {
  const [params, setParams] = useState<Params>();
  const router = useRouter();
  const { query } = router;
  useEffect(() => {
    if (router.isReady && !isEmptyObject(query)) {
      setParams({ ...query });
    }
  }, [query, router.isReady]);

  return {
    params,
  };
};

export default useGetQueryParameters;
