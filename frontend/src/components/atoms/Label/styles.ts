import { css } from '@emotion/css';

import colors from '@/theme/colors';
import fontSizes, { FontSizes } from '@/theme/fontSize';

export type LabelPattern = 'new' | 'required';

type GetStylesInput = {
  pattern: LabelPattern;
  size?: FontSizes;
};

const getLabelColors = (pattern: LabelPattern) => {
  switch (pattern) {
    case 'required':
      return {
        color: colors.white,
        backgroundColor: colors.baseColor,
      };
    case 'new':
      return {
        color: colors.black,
        backgroundColor: colors.PrimaryColor,
      };
  }
};

export const getStyles = ({ pattern, size = 'xs' }: GetStylesInput) => {
  return {
    container: css({
      ...getLabelColors(pattern),
      display: 'inline-block',
      paddingBlock: 2,
      paddingInline: 4,
      fontSize: fontSizes[size],
    }),
  };
};
