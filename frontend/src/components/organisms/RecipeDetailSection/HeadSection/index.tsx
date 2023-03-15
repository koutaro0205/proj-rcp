import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/common/constants/images';
import LikeCountButton from '@/components/atoms/LikeCountButton';
import Title from '@/components/atoms/Title';
import Inset from '@/components/layouts/Inset';
import { Stack } from '@/components/layouts/Stack';

import RecipeInfoItem from './RecipeInfoItem';
import styles from './styles';

export type Props = {
  recipeTitle: string;
  imageUrl?: string;
  categories?: string[];
  cookTime?: string;
  cost?: string;
  postDate: string;
  isLiked: boolean;
  onClickLikeButton: () => void;
  likeCount: number;
};

const MAIN_IMAGE_SIZE = 500;

// FIXME: organismsの子コンポーネントとして配置し直す。
// （コンポーネントにしてはドメインの知識を持ちすぎている。）
const HeadSection: React.FC<Props> = ({
  recipeTitle,
  imageUrl,
  categories = [],
  cookTime,
  cost,
  postDate,
  isLiked = false,
  onClickLikeButton,
  likeCount,
}) => {
  return (
    <div className={styles.container}>
      <Inset all="l" direction="column">
        <Title size="l" color="black">
          {recipeTitle}
        </Title>
        <Stack size="l" />
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <Image
              src={imageUrl || IMAGES.noImageSquare}
              width={MAIN_IMAGE_SIZE}
              height={MAIN_IMAGE_SIZE}
            />
          </div>
          {categories?.length ? (
            <ul className={styles.categoriesList}>
              {categories.map((category) => (
                <li key={category}>{`#${category}`}</li>
              ))}
            </ul>
          ) : null}
          <div className={styles.likeCountButtonWrapper}>
            <LikeCountButton
              isLiked={isLiked}
              onClick={onClickLikeButton}
              likeCount={likeCount}
            />
          </div>
        </div>
        <Stack size="l" />
        <div className={styles.recipeInfoSection}>
          <RecipeInfoItem label="最終更新日" itemValue={postDate} />
          {cookTime && <RecipeInfoItem label="調理時間" itemValue={cookTime} />}
          {cost && <RecipeInfoItem label="コスト" itemValue={cost} />}
        </div>
      </Inset>
    </div>
  );
};

export default HeadSection;
