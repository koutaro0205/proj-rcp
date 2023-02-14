import { css, CSSInterpolation } from '@emotion/css';

import borderRadius from '@/theme/borderRadius';
import colors, { Color } from '@/theme/colors';
import space from '@/theme/space';

export const getStyles = (color: Color) => {
  const CONTAINER_COMMON_STYLES: CSSInterpolation = {
    borderRadius: borderRadius.s,
    paddingBlock: space.s,
    paddingInline: space.m,
    backgroundColor: colors[color],
    border: 'none',
    cursor: 'pointer',
    display: 'inline-block',
  };

  return {
    container: css({
      ...CONTAINER_COMMON_STYLES,
    }),
    content: css({
      display: 'flex',
      alignItems: 'center',
    }),
    linkContainer: css({
      ...CONTAINER_COMMON_STYLES,
      textDecoration: 'none',
      color: colors.black,
    }),
    image: css({
      display: 'inline-block',
    }),
  };
};
