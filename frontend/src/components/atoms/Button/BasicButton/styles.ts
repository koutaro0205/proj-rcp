import { css } from '@emotion/css';

import borderRadius from '@/theme/borderRadius';
import colors, { Color } from '@/theme/colors';
import fontSizes, { FontSizes } from '@/theme/fontSize';
import space from '@/theme/space';

type GetStylesInput = {
  color: Color;
  backgroundColor: Color;
  isCircle: boolean;
  fontSize: Extract<FontSizes, 'xxs' | 'xs' | 's' | 'm'>;
  isTransparent: boolean;
};

const BUTTON_HEIGHT = 32;
export const getStyles = ({
  color,
  backgroundColor,
  isCircle,
  fontSize,
  isTransparent,
}: GetStylesInput) => {
  return {
    container: css({
      cursor: 'pointer',
      color: colors[color],
      backgroundColor: colors[backgroundColor],
      paddingInline: space.m,
      height: BUTTON_HEIGHT,
      fontSize: fontSizes[fontSize],
      borderRadius: borderRadius.m,
      border: 'none',
      ...(isCircle && {
        borderRadius: BUTTON_HEIGHT / 2,
      }),
      ...(isTransparent && {
        opacity: 0.6,
      }),
    }),
  };
};
