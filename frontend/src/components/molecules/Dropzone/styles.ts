import { css } from '@emotion/css';

import borderRadius from '@/theme/borderRadius';
import colors from '@/theme/colors';

type GetStylesInput = {
  isFocused?: boolean;
  hasError?: boolean;
  width: number | string;
  height: number | string;
};

export const getStyles = ({
  // isFocused,
  // hasError,
  width,
  height,
}: GetStylesInput) => {
  return {
    container: css({
      border: `3px dashed ${colors.alto}`,
      borderRadius: borderRadius.m,
      corsor: 'pointer',
      width,
      height,
    }),
    content: css({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      corsor: 'pointer',
      width,
      height,
    }),
    input: css({
      display: 'none',
      corsor: 'pointer',
    }),
  };
};
