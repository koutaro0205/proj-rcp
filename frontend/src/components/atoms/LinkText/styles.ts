import { css } from '@emotion/css';

import colors, { Color } from '@/theme/colors';
import fontSizes, { FontSizes } from '@/theme/fontSize';
import fontWeight, { FontWeight } from '@/theme/fontWeight';
import { LineHeights } from '@/theme/lineHeights';

export type GetStyleInput = {
  isUnderLine: boolean;
  hasHoverAction: boolean;
  size: FontSizes;
  weight: FontWeight;
  lineHeight: LineHeights;
  color: Color;
};

export const getStyles = ({
  isUnderLine = false,
  hasHoverAction = false,
  size = 'm',
  weight = 'normal',
  lineHeight,
  color = 'black',
}: Partial<GetStyleInput>) => {
  return {
    linkText: css({
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: fontSizes[size],
      fontWeight: fontWeight[weight],
      lineHeight,
      color: colors[color],
      ...(isUnderLine && {
        borderBottom: `solid 1px ${colors[color]}`,
      }),
      ...(hasHoverAction && {
        '&:hover': {
          textDecoration: 'underline',
        },
      }),
    }),
  };
};
