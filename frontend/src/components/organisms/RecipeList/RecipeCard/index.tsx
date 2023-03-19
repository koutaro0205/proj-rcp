import React from 'react';

import { IMAGES } from '@/common/constants/images';
import { RECIPES_PATH, USERS_PATH } from '@/common/constants/path';
import { Recipe, RecipeCard as RecipeCardType } from '@/common/types/data';
import Icon from '@/components/atoms/Icon';
import Image from '@/components/atoms/Image';
import Link from '@/components/atoms/Link';
import Text from '@/components/atoms/Text';
import Title from '@/components/atoms/Title';
import UserImage from '@/components/atoms/UserImage';
import Inset from '@/components/layouts/Inset';
import { Queue } from '@/components/layouts/Queue';
import { Stack } from '@/components/layouts/Stack';

import styles from './styles';

type Props = {
  /* RecipeInfo */
  recipeId: Recipe['id'];
  recipeImage: Recipe['image_url'];
  postDate: Recipe['updated_at'];
  title: Recipe['title'];
  cookTime: Recipe['cook_time'];
  cost: Recipe['cost'];
  /* UserInfo */
  userId: RecipeCardType['user']['id'];
  userImage: RecipeCardType['user']['image_url'];
  userName: RecipeCardType['user']['name'];
};

const RecipeCard: React.FC<Props> = ({
  recipeId,
  recipeImage,
  postDate,
  title,
  cookTime,
  cost,
  userId,
  userImage,
  userName,
}) => {
  return (
    <Link href={`${RECIPES_PATH}/${recipeId}`} className={styles.container}>
      <Image src={recipeImage || IMAGES.noImage} imageHeight={200} />
      <Inset all="s" direction="column">
        <Text size="s">{postDate}</Text>
        <div className={styles.titleWrapper}>
          <Title color="black" size="ml">
            {title}
          </Title>
        </div>
        <object>
          <Link href={`${USERS_PATH}/${userId}`} className={styles.userInfo}>
            <UserImage size="small" imagePath={userImage} />
            <Text size="s">{userName}</Text>
          </Link>
        </object>
        <Stack size="m" />
        <ul className={styles.recipeInfo}>
          <li className={styles.recipeInfoItem}>
            <Icon name="TIME" size="s" />
            <Queue size="xs" />
            <Text size="s">{cookTime}</Text>
          </li>
          {cost && (
            <li className={styles.recipeInfoItem}>
              <Icon name="COST" size="s" />
              <Queue size="xs" />
              <Text size="s">{cost}</Text>
            </li>
          )}
          <li className={styles.recipeInfoItem}>
            <Icon name="RED_HEART" size="s" />
            <Queue size="xs" />
            {/* FIXME: 数値はダミー。お気に入り機能実装後に追加する。 */}
            <Text size="s">24</Text>
          </li>
        </ul>
      </Inset>
    </Link>
  );
};

export default RecipeCard;
