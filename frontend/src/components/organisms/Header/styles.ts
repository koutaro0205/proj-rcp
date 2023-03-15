import { css } from '@emotion/css';

import colors from '@/theme/colors';
import space from '@/theme/space';
import zIndex from '@/theme/zIndex';

export const HEADER_MENU_HEIGHT = 92;
const HEADER_NAVIGATION_HEIGHT = 50;

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
      ...(isSticky && {
        height: HEADER_MENU_HEIGHT + HEADER_NAVIGATION_HEIGHT,
      }),
    }),
    menuList: css({
      display: 'flex',
      listStyleType: 'none',
      paddingLeft: '0px',
    }),
    navigation: css({
      position: 'relative',
      backgroundColor: colors.PrimaryColor,
      zIndex: zIndex.normal,
      boxShadow: '0px 8px 5px -5px rgba(0,0,0,0.5)',
      transition: '0.3s',
      ...(isSticky && {
        transition: '0.3s',
        position: 'fixed',
        top: 0,
        width: '100%',
      }),
    }),
    navigationList: css({
      height: HEADER_NAVIGATION_HEIGHT,
      display: 'flex',
      gap: space.l,
      alignItems: 'center',
      justifyContent: 'center',
      listStyleType: 'none',
    }),
  };
};
