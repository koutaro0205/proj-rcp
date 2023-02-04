import { css } from '@emotion/css';

import colors from '@/theme/colors';
import space from '@/theme/space';

export const HEADER_MENU_HEIGHT = 92;

export const getStyles = (isSticky: boolean) => {
  return {
    container: css({
      width: '100%',
    }),
    menuContainer: css({
      display: 'flex',
      justifyContent: 'space-between',
      height: HEADER_MENU_HEIGHT,
      alignItems: 'center',
    }),
    menuList: css({
      display: 'flex',
      listStyleType: 'none',
      paddingLeft: '0px',
    }),
    navigation: css({
      backgroundColor: colors.PrimaryColor,
      zIndex: 10,
      ...(isSticky && {
        position: 'fixed',
        top: 0,
        width: '100%',
      }),
    }),
    navigationList: css({
      height: '50px',
      display: 'flex',
      gap: space.l,
      alignItems: 'center',
      justifyContent: 'center',
      listStyleType: 'none',
    }),
  };
};
