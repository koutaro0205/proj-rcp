import { css } from '@emotion/css';

import fontSizes from '@/theme/fontSize';
import lineHeights, { LineHeights } from '@/theme/lineHeights';
import space from '@/theme/space';

type Args = {
  lineHeight: LineHeights;
};

export const getStyles = ({ lineHeight }: Args) => {
  return {
    message: css({
      marginBlock: space.xs,
      fontSize: fontSizes.s,
      lineHeight: lineHeights[lineHeight],
    }),
  };
};
