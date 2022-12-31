import { css } from '@emotion/css';

import colors from '@/theme/colors';
import space from '@/theme/space';

export const getStyles = (innerWidth: string) => {
  return {
    container: css({
      width: innerWidth,
      margin: '0 auto',
      backgroundColor: colors.white,
      padding: space.mediumLarge,
      marginTop: space.mediumLarge,
      marginBottom: space.mediumLarge,
    }),
  };
};
