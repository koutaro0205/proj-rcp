import { css } from '@emotion/css';

import borderRadius from '@/theme/borderRadius';
import colors, { Color } from '@/theme/colors';
import space from '@/theme/space';

type GetStyleInput = {
  color: Color;
  backgroundColor: Color;
};

export const getStyles = ({ color, backgroundColor }: GetStyleInput) => {
  return {
    container: css({
      position: 'relative',
      cursor: 'pointer',
      color: colors[color],
      backgroundColor: colors[backgroundColor],
      display: 'flex',
      alignItems: 'center',
      border: 'none',
      height: '28px',
      borderRadius: borderRadius.m,
    }),
    imageWrapper: css({
      marginLeft: space.xxs,
      marginTop: '2px',
      display: 'inline-block',
    }),
  };
};
