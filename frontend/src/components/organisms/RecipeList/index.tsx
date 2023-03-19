import React from 'react';

import { RecipeCard as RecipeCardType } from '@/common/types/data';
import Text from '@/components/atoms/Text';
import { formatDate } from '@/utils/date';

import RecipeCard from './RecipeCard';
import styles from './styles';

type Props = {
  recipes: Omit<RecipeCardType, 'created_at'>[];
};

const RecipeList: React.FC<Props> = ({ recipes }) => {
  return (
    <div className={styles.container}>
      {recipes.length ? (
        recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipeId={recipe.id}
            recipeImage={recipe.image_url}
            postDate={formatDate(recipe.updated_at)}
            title={recipe.title}
            cookTime={recipe.cook_time}
            cost={recipe.cost}
            userId={recipe.user.id}
            userImage={recipe.user.image_url}
            userName={recipe.user.name}
          />
        ))
      ) : (
        <div className={styles.empty}>
          <Text textAlign="center">現在、投稿されたレシピはありません。</Text>
        </div>
      )}
    </div>
  );
};

export default RecipeList;
