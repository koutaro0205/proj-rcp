import { css } from '@emotion/css';

import space, { Space } from '@/theme/space';

export const getStyles = (size: Space, isDebugHilight: boolean) => {
  return {
    container: css({
      width: space[size],
      backgroundColor: isDebugHilight ? 'red' : 'transparent',
    }),
  };
};
