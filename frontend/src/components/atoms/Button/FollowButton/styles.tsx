import { css } from '@emotion/css';

import colors from '@/theme/colors';
import space from '@/theme/space';

export type ButtonSize = 'normal' | 'full';

type GetStylesInput = {
  isFollowing: boolean;
  size: ButtonSize;
};

export const getStyles = ({ isFollowing, size }: GetStylesInput) => {
  return {
    button: css({
      width: size === 'normal' ? '120px' : '100%',
      color: colors.black,
      border: `${colors.PrimaryColor} solid 3px`,
      borderRadius: '17px',
      paddingBlock: space.xxs,
      cursor: 'pointer',
      backgroundColor: isFollowing ? colors.white : colors.PrimaryColor,
    }),
  };
};
