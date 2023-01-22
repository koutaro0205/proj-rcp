import { css } from '@emotion/css';

import borderRadius from '@/theme/borderRadius';
import colors from '@/theme/colors';
import space from '@/theme/space';

export const getStyles = (isSelected: boolean) => {
  const buttonSize = '40px';
  return {
    container: css({
      marginRight: space.extraSmall,
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }),
    content: css({
      width: buttonSize,
      height: buttonSize,
      border: `2px solid ${colors.grey}`,
      borderRadius: borderRadius.medium,
      ...(isSelected && {
        backgroundColor: colors.PrimaryColor,
      }),
    }),
    link: css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      textDecoration: 'none',
      color: colors.black,
    }),
  };
};
