import { css } from '@emotion/css';

import { CSSPropertyTextAlign } from '@/@types/styles';
import colors, { Color } from '@/theme/colors';
import fontSizes, { FontSizes } from '@/theme/fontSize';
import { FontWeight } from '@/theme/fontWeight';
import lineHeights, { LineHeights } from '@/theme/lineHeights';
import space from '@/theme/space';

type Args = {
  textAlign: CSSPropertyTextAlign;
  lineHeight: LineHeights;
  backgroundColor?: Color;
  size: FontSizes;
  weight: FontWeight;
};

export const getStyles = ({
  textAlign,
  lineHeight,
  backgroundColor,
  size,
  weight,
}: Args) => {
  const getBackground = backgroundColor && {
    backgroundColor: colors[backgroundColor],
    padding: space.s,
  };
  return {
    text: css({
      display: 'inline-blick',
      textAlign,
      lineHeight: lineHeights[lineHeight],
      ...getBackground,
      fontSize: fontSizes[size],
      fontWeight: weight,
    }),
  };
};
