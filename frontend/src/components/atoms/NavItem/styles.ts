import { css } from '@emotion/css';

import colors from '@/theme/colors';
import fontSizes from '@/theme/fontSize';
import space from '@/theme/space';

export type ItemSize = 's' | 'm';

export const getSpacingSize = (size: ItemSize) => {
  if (size === 'm') {
    return css({
      display: 'flex',
      alignItems: 'center',
      '&:nth-child(n+2)': {
        marginLeft: space.large,
      },
    });
  }
  return css({
    display: 'flex',
    alignItems: 'center',
    '&:nth-child(n+2)': {
      marginLeft: space.medium,
    },
  });
};

export const getFontSize = (size: ItemSize) => {
  if (size === 'm') {
    return css({
      color: colors.black,
      fontSize: fontSizes.small,
      cursor: 'pointer',
    });
  }
  return css({
    color: colors.black,
    fontSize: fontSizes.extraSmall,
    cursor: 'pointer',
  });
};
