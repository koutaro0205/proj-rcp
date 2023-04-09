import React from 'react';

import { Recipe } from '@/common/types/data';
import Label from '@/components/atoms/Label';
import Title from '@/components/atoms/Title';
import { Stack } from '@/components/layouts/Stack';
import { trimString } from '@/utils/parse';

import styles from './styles';

export type Props = {
  recipeSteps: Recipe['recipe_steps'];
  tip: Recipe['tip'];
};

const StepDetailSection: React.FC<Props> = ({ recipeSteps, tip }) => {
  return (
    <div className={styles.container}>
      <Title size="ml" color="black">
        作り方
      </Title>
      <Stack size="m" />
      <ul className={styles.recipeStepList}>
        {recipeSteps.map((step, index) => (
          <li key={step?.id} className={styles.stepItem}>
            <Label
              pattern="default"
              color="black"
              backgroundColor="PrimaryColor"
              lablelText={`${index + 1}`}
              size="m"
              isRoundCorner
            />
            <p className={styles.description}>
              {trimString(step?.description)}
            </p>
            {/* HACK: KOU-146 Stepの画像を投稿できるように修正する。 */}
            {/* <div className={styles.imageWrapper}>
              <Image
                src={step?.image_url || IMAGES.noImageSquare}
                width={140}
                height={140}
              />
            </div> */}
          </li>
        ))}
      </ul>
      <Stack size="l" />
      <Title size="m" color="black">
        うまくできるコツ
      </Title>
      <Stack size="s" />
      {tip && <p className={styles.tip}>{tip}</p>}
    </div>
  );
};

export default StepDetailSection;
