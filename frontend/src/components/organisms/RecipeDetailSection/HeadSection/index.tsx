import Image from 'next/image';
import React, { useState } from 'react';

import { IMAGES } from '@/common/constants/images';
import { RECIPES_PATH, CATEGORIES_PATH } from '@/common/constants/path';
import { Recipe } from '@/common/types/data';
import LikeCountButton from '@/components/atoms/LikeCountButton';
import LinkText from '@/components/atoms/LinkText';
import Title from '@/components/atoms/Title';
import Inset from '@/components/layouts/Inset';
import { Stack } from '@/components/layouts/Stack';
import Modal from '@/components/molecules/Modal';
import { useCurrentUser } from '@/features/currentUser/useCurrentUser';

import RecipeInfoItem from './RecipeInfoItem';
import styles from './styles';

export type Props = {
  recipeTitle: Recipe['title'];
  imageUrl?: Recipe['image_url'];
  cookTime?: Recipe['cook_time'];
  cost?: Recipe['cost'];
  postDate: Recipe['updated_at'];
  description: Recipe['description'];
  category: Recipe['category'];
  isFavorite: boolean;
  onClickFavoriteButton: () => void;
  likeCount: number;
};

const MAIN_IMAGE_SIZE = 500;

const HeadSection: React.FC<Props> = ({
  recipeTitle,
  imageUrl,
  cookTime,
  cost,
  postDate,
  description,
  category,
  isFavorite,
  onClickFavoriteButton,
  likeCount,
}) => {
  const { isLoggedIn } = useCurrentUser();
  const [isOpenImageModal, setIsOpenImageModal] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <Inset all="l" direction="column">
          <Inset horizontal="xl">
            <Title size="l" color="black">
              {recipeTitle}
            </Title>
          </Inset>
          <Stack size="l" />
          <div className={styles.imageSection}>
            <div
              className={styles.imageWrapper}
              onClick={() => setIsOpenImageModal(true)}
              role="presentation"
            >
              <Image
                src={imageUrl || IMAGES.noImageSquare}
                width={MAIN_IMAGE_SIZE}
                height={MAIN_IMAGE_SIZE}
              />
            </div>
            {category.name && (
              <div className={styles.categoryWrapper}>
                <LinkText
                  path={`${RECIPES_PATH}${CATEGORIES_PATH}/${category.id}`}
                  weight="bold"
                  hasHoverAction
                >{`#${category.name}`}</LinkText>
              </div>
            )}
            {isLoggedIn && (
              <div className={styles.likeCountButtonWrapper}>
                <LikeCountButton
                  isLiked={isFavorite}
                  onClick={onClickFavoriteButton}
                  likeCount={likeCount}
                />
              </div>
            )}
          </div>
          <Stack size="l" />
          <div className={styles.recipeInfoSection}>
            <RecipeInfoItem label="最終更新日" itemValue={postDate} />
            {cookTime && (
              <RecipeInfoItem label="調理時間" itemValue={cookTime} />
            )}
            {cost && <RecipeInfoItem label="コスト" itemValue={cost} />}
          </div>
          <Stack size="l" />
          <p className={styles.description}>{description}</p>
        </Inset>
      </div>
      <Modal
        isOpenModal={isOpenImageModal}
        closeModal={() => setIsOpenImageModal(false)}
      >
        <Title size="m" color="black">
          {recipeTitle}
        </Title>
        <Stack size="l" />
        <Image
          src={imageUrl || IMAGES.noImageSquare}
          width="100%"
          height="100%"
        />
      </Modal>
    </>
  );
};

export default HeadSection;
