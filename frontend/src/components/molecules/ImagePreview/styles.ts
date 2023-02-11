import { css } from '@emotion/css';

import borderRadius from '@/theme/borderRadius';
import colors from '@/theme/colors';

const CLOSE_BUTTON_WRAPPER = '30px';
export const getStyles = () => {
  return {
    container: css({
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
    }),
    closeButtonWrapper: css({
      position: 'absolute',
      top: 0,
      right: 0,
      width: CLOSE_BUTTON_WRAPPER,
      height: CLOSE_BUTTON_WRAPPER,
      borderRadius: borderRadius.m,
      backgroundColor: colors.background,
      cursor: 'pointer',
    }),
  };
};
