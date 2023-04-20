// ユーザー情報
export type User = {
  id: number;
  name: string;
  email: string;
  password_digest: string;
  created_at: string;
  updated_at: string;
  remember_digest: string | null;
  reset_digest: string | null;
  reset_sent_at: string | null;
  activation_digest: string | null;
  activated: boolean | null;
  activated_at: string | null;
  admin: boolean;
  image_url?: string | null;
};

// ユーザー詳細（プロフィール）
export type UserProfile = {
  recipes: RecipeData[];
} & User;

// カテゴリ
export type Category = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
};

// 材料
export type RecipeIngredient = {
  id: number;
  ingredient_name: string;
  quantity: string;
  created_at: string;
  updated_at: string;
  recipe_id?: number;
};

// 作り方
export type RecipeStep = {
  id: number;
  created_at: string;
  updated_at: string;
  description: string;
  image_url?: string;
};

// レシピデータ
export type RecipeData = {
  id: number;
  title: string;
  image_url?: string;
  cook_time: string;
  cost: string | null;
  tip: string | null;
  created_at: string;
  updated_at: string;
  description: string;
  serving_size: number;
  category_id: number;
};

// レシピ詳細
export type Recipe = {
  recipe_ingredients: RecipeIngredient[];
  recipe_steps: RecipeStep[];
  category: Category;
} & RecipeData;

// レシピカード
export type RecipeCard = {
  user: User;
  category: Category;
} & RecipeData;
