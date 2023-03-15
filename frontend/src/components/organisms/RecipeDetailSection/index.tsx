import React from 'react';

import { Stack } from '@/components/layouts/Stack';

import HeadSection, { Props as HeadSectionProps } from './HeadSection';
import IngredientDetailSection, {
  Props as IngredientDetailSectionProps,
} from './IngredientDetailSection';
import StepDetailSection, {
  Props as StepDetailSectionProps,
} from './StepDetailSection';
import styles from './styles';

type Props = Omit<
  HeadSectionProps,
  'isLiked' | 'onClickLikeButton' | 'likeCount'
> &
  IngredientDetailSectionProps &
  StepDetailSectionProps;

const RecipeDetailSection: React.FC<Props> = ({
  /* HeadSection */
  recipeTitle,
  imageUrl,
  categories,
  cookTime,
  cost,
  postDate,
  // isLiked,
  // onClickLikeButton,
  // likeCount,
  /* IngredientDetailSection */
  servingSize,
  recipeIngredients,
  /* StepDetailSection */
  recipeSteps,
}) => {
  return (
    <div className={styles.container}>
      <HeadSection
        imageUrl={imageUrl}
        recipeTitle={recipeTitle}
        postDate={postDate}
        categories={categories}
        cookTime={cookTime}
        cost={cost}
        // FIXME: currentUserがそのレシピをお気に入りしているか
        isLiked={false}
        onClickLikeButton={() => {}}
        likeCount={0}
      />
      <Stack size="xl" />
      <IngredientDetailSection
        servingSize={servingSize}
        recipeIngredients={recipeIngredients}
      />
      <Stack size="xl" />
      <StepDetailSection recipeSteps={recipeSteps} />
      <Stack size="xl" />
    </div>
  );
};

export default RecipeDetailSection;
