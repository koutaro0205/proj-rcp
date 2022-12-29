import { css } from '@emotion/css';

import { CSSPropertyTextAlign } from '@/@types/styles';
import lineHeights, { LineHeights } from '@/theme/lineHeights';
import space from '@/theme/space';

type Args = {
  textAlign: CSSPropertyTextAlign;
  lineHeight: LineHeights;
};

export const getStyles = ({ textAlign, lineHeight }: Args) => {
  return {
    text: css({
      marginTop: space.mediumLarge,
      textAlign,
      lineHeight: lineHeights[lineHeight],
    }),
  };
};
