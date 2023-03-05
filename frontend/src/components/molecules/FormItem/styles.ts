import { css } from '@emotion/css';

import { NORMAL_BORDER_STYLE } from '@/common/constants/typography';
import borderRadius from '@/theme/borderRadius';
import colors from '@/theme/colors';
import lineHeights from '@/theme/lineHeights';
import space from '@/theme/space';

const FORM_WIDTH = {
  s: 120,
  m: 240,
  fluid: '100%',
};

export type FieldWidth = keyof typeof FORM_WIDTH;

export const getStyles = (fieldWidth: FieldWidth) => {
  return {
    container: css({
      display: 'inline-block',
      width: fieldWidth === 's' ? 'auto' : '100%',
    }),
    labelContainer: css({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }),
    inputField: css({
      display: fieldWidth === 's' ? 'inline-block' : 'block',
      transition:
        'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
      width: FORM_WIDTH[fieldWidth],
      padding: `${space.xs} ${space.s}`,
      lineHeight: lineHeights.m,
      color: colors.grey,
      backgroundColor: colors.white,
      backgroundImage: 'none',
      border: NORMAL_BORDER_STYLE,
      borderRadius: borderRadius.s,
      boxSizing: 'border-box',
      '::placeholder': {
        opacity: 0.3,
      },
    }),
    textarea: css({
      minHeight: 130,
    }),
  };
};
