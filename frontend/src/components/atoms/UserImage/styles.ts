import { css } from '@emotion/css';

import borderRadius from '@/theme/borderRadius';
import space from '@/theme/space';

export type UserImageSize = 'small' | 'medium' | 'large';

const userImageSize = {
  small: '10px',
  medium: '50px',
  large: '80px',
};

export const getImageSize = (size: UserImageSize) => userImageSize[size];

export const getStyles = (size: UserImageSize) => {
  const USER_IMAGE_SIZE = getImageSize(size);

  return {
    imageWrapper: css({
      width: USER_IMAGE_SIZE,
      height: USER_IMAGE_SIZE,
      marginRight: space.large,
      borderRadius: borderRadius.circle,
    }),
    image: css({
      width: '100%',
      height: '100%',
      borderRadius: borderRadius.circle,
      objecttFit: 'cover',
      objectPosition: 'center',
    }),
  };
};
