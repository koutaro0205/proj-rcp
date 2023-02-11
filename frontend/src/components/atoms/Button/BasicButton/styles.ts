import { css } from '@emotion/css';

import borderRadius from '@/theme/borderRadius';
import colors, { Color } from '@/theme/colors';
import fontSizes, { FontSizes } from '@/theme/fontSize';
import space from '@/theme/space';

type GetStylesInput = {
  color: Color;
  backgroundColor: Color;
  isCircle: boolean;
  fontSize: FontSizes;
};

const BUTTON_HEIGHT = 32;
export const getStyles = ({
  color,
  backgroundColor,
  isCircle,
  fontSize,
}: GetStylesInput) => {
  return {
    container: css({
      color: colors[color],
      backgroundColor: colors[backgroundColor],
      paddingInline: space.xl,
      height: BUTTON_HEIGHT,
      fontSize: fontSizes[fontSize],
      borderRadius: borderRadius.m,
      ...(isCircle && {
        borderRadius: BUTTON_HEIGHT / 2,
      }),
    }),
  };
};
