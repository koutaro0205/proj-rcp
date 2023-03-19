import { css } from '@emotion/css';

import borderRadius from '@/theme/borderRadius';
import colors from '@/theme/colors';
import fontSizes from '@/theme/fontSize';

export const ATTACHED_IMAGE_SIZE = {
  mainSize: 300,
  subSize: 130,
  freeSize: '100%',
};

export type AttachedImageSize = keyof typeof ATTACHED_IMAGE_SIZE;

export const getStyles = (size: AttachedImageSize) => {
  return {
    container: css({
      position: 'relative',
      border: `solid 1px ${colors.alto}`,
      borderRadius: borderRadius.s,
      width: ATTACHED_IMAGE_SIZE[size],
      height: ATTACHED_IMAGE_SIZE[size],
    }),
    buttonWrapper: css({
      position: 'absolute',
      bottom: 10,
      left: '50%',
      transform: 'translateX(-50%)',
    }),
    image: css({
      borderRadius: borderRadius.s,
    }),
    inputContainer: css({
      border: `3px dashed ${colors.alto}`,
      borderRadius: borderRadius.m,
      corsor: 'pointer',
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
      position: 'relative',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
    }),
    inputContent: css({
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      corsor: 'pointer',
      fontSize: fontSizes.s,
      color: colors.alto,
    }),
    input: css({
      height: '100%',
      padding: 5,
      boxSizing: 'border-box',
    }),
  };
};
