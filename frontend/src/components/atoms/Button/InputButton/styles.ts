import { css } from '@emotion/css';

import borderRadius from '@/theme/borderRadius';
import colors, { Color } from '@/theme/colors';
import fontSizes from '@/theme/fontSize';
import lineHeights from '@/theme/lineHeights';
import space from '@/theme/space';

type GetStylesInput = {
  color: Color;
  isCenter: boolean;
};

export const getStyles = ({ color, isCenter }: GetStylesInput) => {
  return {
    container: css({
      ...(isCenter && {
        textAlign: 'center',
      }),
    }),
    input: css({
      display: 'inline-block',
      marginBottom: space.zero,
      fontWeight: 'nomal',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      backgroundImage: 'none',
      borderColor: colors[color],
      borderWidth: '3px',
      borderStyle: 'solid',
      fontSize: fontSizes.s,
      paddingBlock: space.xxs,
      paddingInline: space.s,
      lineHeight: lineHeights.m,
      borderRadius: borderRadius.s,
      cursor: 'pointer',
      color: colors.black,
      backgroundColor: colors[color],
      ':disabled': {
        opacity: 0.5,
        cursor: 'auto',
      },
    }),
  };
};
