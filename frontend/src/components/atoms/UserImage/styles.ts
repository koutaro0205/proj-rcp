import { css } from '@emotion/css';

import borderRadius from '@/theme/borderRadius';

export type UserImageSize = 'small' | 'medium' | 'large';

export const USER_IMAGE_SIZE = {
  small: '32px',
  medium: '50px',
  large: '80px',
};

export const getStyles = (size: UserImageSize) => {
  const imageSize = USER_IMAGE_SIZE[size];

  return {
    imageWrapper: css({
      width: imageSize,
      height: imageSize,
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
