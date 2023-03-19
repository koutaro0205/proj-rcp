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
};

// レシピ詳細
export type Recipe = {
  recipe_ingredients: RecipeIngredient[];
  recipe_steps: RecipeStep[];
} & RecipeData;

// レシピカード
export type RecipeCard = {
  user: User;
} & RecipeData;
