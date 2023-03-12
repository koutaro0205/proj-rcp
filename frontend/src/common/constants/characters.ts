/* バリデーション */

export const PASSWORD_MIN_LENGHT = 6;

/* ページネーション */

// １ページあたりの表示件数
export const ITEMS_PER_PAGE = 15;
// 最大ページ表示数（表示するアイテム数の上限）
export const MAX_PAGE_COUNT = 999;

export const POSTED_RECIPE_INFO = {
  title: 25,
  description: 150,
  ingredient: {
    name: 20,
    quantity: 20,
  },
  step: {
    description: 150,
  },
  tip: 150,
} as const;
