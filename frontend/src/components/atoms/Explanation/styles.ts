import { css } from '@emotion/css';

import fontSizes from '@/theme/fontSize';
import lineHeights, { LineHeights } from '@/theme/lineHeights';
import space from '@/theme/space';

type Args = {
  lineHeight: LineHeights;
};

export const getStyles = ({ lineHeight }: Args) => {
  const textSpaceSize = space.extraSmall;
  return {
    message: css({
      marginTop: textSpaceSize,
      marginBottom: textSpaceSize,
      fontSize: fontSizes.small,
      lineHeight: lineHeights[lineHeight],
    }),
  };
};
