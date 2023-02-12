import { css } from '@emotion/css';

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
      width: '100%',
    }),
    labelContainer: css({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }),
    inputField: css({
      display: 'block',
      transition:
        'border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s',
      width: FORM_WIDTH[fieldWidth],
      padding: `${space.xs} ${space.s}`,
      lineHeight: lineHeights.m,
      color: colors.grey,
      backgroundColor: colors.white,
      backgroundImage: 'none',
      border: `1px solid ${colors.alto}`,
      borderRadius: borderRadius.s,
      boxSizing: 'border-box',
    }),
    textarea: css({
      minHeight: 130,
    }),
  };
};
