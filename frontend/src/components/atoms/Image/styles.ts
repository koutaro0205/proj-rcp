import { css } from '@emotion/css';

export const getStyles = (imageHeight: string | number) => {
  return {
    container: css({
      position: 'relative',
      width: '100%',
      height: imageHeight,
    }),
    image: css({
      objectFit: 'cover',
    }),
  };
};
