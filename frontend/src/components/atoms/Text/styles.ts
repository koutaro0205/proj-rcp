import { css } from '@emotion/css';

import { CSSPropertyTextAlign } from '@/@types/styles';
import colors, { Color } from '@/theme/colors';
import lineHeights, { LineHeights } from '@/theme/lineHeights';
import space from '@/theme/space';

type Args = {
  textAlign: CSSPropertyTextAlign;
  lineHeight: LineHeights;
  backgroundColor?: Color;
};

export const getStyles = ({ textAlign, lineHeight, backgroundColor }: Args) => {
  const getBackground = backgroundColor && {
    backgroundColor: colors[backgroundColor],
    padding: space.s,
  };
  return {
    text: css({
      marginTop: space.m,
      textAlign,
      lineHeight: lineHeights[lineHeight],
      ...getBackground,
    }),
  };
};
