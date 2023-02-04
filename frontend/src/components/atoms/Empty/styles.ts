import { css } from '@emotion/css';

import fontSizes, { FontSizes } from '@/theme/fontSize';
import space from '@/theme/space';

type GetStylesProps = {
  size: FontSizes;
};

export const getStyles = ({ size }: GetStylesProps) => {
  return {
    container: css({
      textAlign: 'center',
      paddingBlock: space.xl,
      fontSize: fontSizes[size],
    }),
  };
};
