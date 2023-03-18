import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/common/constants/images';
import { Recipe } from '@/common/types/data';
import Label from '@/components/atoms/Label';
import Title from '@/components/atoms/Title';
import { Stack } from '@/components/layouts/Stack';
import { trimString } from '@/utils/parse';

import styles from './styles';

export type Props = {
  recipeSteps: Recipe['recipe_steps'];
};

const StepDetailSection: React.FC<Props> = ({ recipeSteps }) => {
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
            <div className={styles.imageWrapper}>
              <Image
                src={step?.image_url || IMAGES.noImageSquare}
                width={140}
                height={140}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StepDetailSection;
