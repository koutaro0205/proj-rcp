import { ITEMS_PER_PAGE } from '@/common/constants/characters';

import useQueryParameters from './useQueryParameters';

/**
 * <Pagination>コンポーネントの使用側で用いるHook
 * @slicedData 全データの内、１ページ分のデータ
 * @page 現在のページ数（クエリパラメータから取得。デフォルトは"1"）
 */

// NOTE: どんな内容の配列が入るか不明なため、anyで対応
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useGetPaginationData = (data: Array<any>) => {
  const { page } = useQueryParameters();
  const indexOfLastData = page * ITEMS_PER_PAGE;
  const indexOfFirstData = indexOfLastData - ITEMS_PER_PAGE;
  const slicedData = data && data.slice(indexOfFirstData, indexOfLastData);

  return { slicedData, page };
};

export default useGetPaginationData;
