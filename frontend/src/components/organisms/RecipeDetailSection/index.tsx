import React from 'react';

import { Recipe } from '@/common/types/data';
import { Stack } from '@/components/layouts/Stack';
import { useFavorite } from '@/hooks/useFavorite';
import { formatDate } from '@/utils/date';

import HeadSection from './HeadSection';
import IngredientDetailSection from './IngredientDetailSection';
import StepDetailSection from './StepDetailSection';
import styles from './styles';

type Props = {
  recipe: Recipe;
};

const RecipeDetailSection: React.FC<Props> = ({ recipe }) => {
  const { isFavorite, handleClickFavoriteButton, favoriteCount } = useFavorite({
    recipe,
  });
  return (
    <div className={styles.container}>
      <HeadSection
        imageUrl={recipe.image_url}
        recipeTitle={recipe.title}
        postDate={formatDate(recipe.updated_at)}
        description={recipe.description}
        cookTime={recipe.cook_time}
        cost={recipe.cost}
        category={recipe.category}
        isFavorite={isFavorite}
        onClickFavoriteButton={handleClickFavoriteButton}
        likeCount={favoriteCount}
      />
      <Stack size="xl" />
      <IngredientDetailSection
        servingSize={recipe.serving_size}
        recipeIngredients={recipe.recipe_ingredients}
      />
      <Stack size="xl" />
      <StepDetailSection recipeSteps={recipe.recipe_steps} tip={recipe.tip} />
      <Stack size="xl" />
    </div>
  );
};

export default RecipeDetailSection;
