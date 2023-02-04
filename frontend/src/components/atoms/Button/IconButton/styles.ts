import { css } from '@emotion/css';

import borderRadius from '@/theme/borderRadius';
import colors, { Color } from '@/theme/colors';
import space from '@/theme/space';

export const getStyles = (color: Color) => {
  return {
    container: css({
      borderRadius: borderRadius.s,
      paddingBlock: space.s,
      paddingInline: space.m,
      backgroundColor: colors[color],
      display: 'flex',
      alignItems: 'center',
    }),
  };
};
