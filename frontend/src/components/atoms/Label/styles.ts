import { css } from '@emotion/css';

import borderRadius from '@/theme/borderRadius';
import colors, { Color } from '@/theme/colors';
import fontSizes, { FontSizes } from '@/theme/fontSize';
import fontWeight from '@/theme/fontWeight';
import space from '@/theme/space';

export const LABEL_TEXT = {
  required: '必須',
  new: 'NEW',
};

export type DefaultPattern = 'default';
export type SpecificPattern = keyof typeof LABEL_TEXT;
export type Pattern = typeof LABEL_TEXT & {
  default: string;
};

export type LabelPattern = keyof Pattern;

type GetStylesInput = {
  pattern: LabelPattern;
  size: FontSizes;
  isRoundCorner: boolean;
  color: Color;
  backgroundColor: Color;
};

export const getStyles = ({
  pattern,
  size,
  isRoundCorner,
  color,
  backgroundColor,
}: GetStylesInput) => {
  const commonStyles = {
    display: 'inline-block',
    fontSize: fontSizes[size],
    ...(isRoundCorner && {
      borderRadius: borderRadius.m,
    }),
  };

  const specificLabelStyles = {
    ...commonStyles,
    paddingBlock: 2,
    paddingInline: space.xxs,
  };

  switch (pattern) {
    case 'required':
      return css({
        ...specificLabelStyles,
        color: colors.white,
        backgroundColor: colors.baseColor,
      });
    case 'new':
      return css({
        ...specificLabelStyles,
        color: colors.black,
        backgroundColor: colors.PrimaryColor,
      });
    default:
      return css({
        ...commonStyles,
        paddingBlock: space.xs,
        paddingInline: space.xs,
        fontWeight: fontWeight.bold,
        color: colors[color],
        backgroundColor: colors[backgroundColor],
      });
  }
};
