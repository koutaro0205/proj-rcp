import { css } from '@emotion/css';

import fontSizes from '@/theme/fontSize';
import lineHeights, { LineHeights } from '@/theme/lineHeights';
import space from '@/theme/space';

type Args = {
  lineHeight: LineHeights;
};

export const getStyles = ({ lineHeight }: Args) => {
  const horizontalSpace = space.extraSmall;
  return {
    message: css({
      marginTop: horizontalSpace,
      marginBottom: horizontalSpace,
      fontSize: fontSizes.small,
      lineHeight: lineHeights[lineHeight],
    }),
  };
};
