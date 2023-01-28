import { css } from '@emotion/css';

import space from '@/theme/space';

export type SpacingSize = 's' | 'm';

export const getStyles = (size: SpacingSize) => {
  const spacingSize = size === 'm' ? space.l : space.m;
  return {
    container: css({
      display: 'flex',
      alignItems: 'center',
      '&:nth-child(n+2)': {
        marginLeft: spacingSize,
      },
    }),
  };
};
