import { css, CSSInterpolation } from '@emotion/css';

import colors, { Color } from '@/theme/colors';
import fontSizes, { FontSizes } from '@/theme/fontSize';
import fontWeight from '@/theme/fontWeight';
import lineHeights from '@/theme/lineHeights';
import { mq } from '@/utils/mediaQuery';

export type TitleSize = Extract<
  FontSizes,
  's' | 'm' | 'ml' | 'l' | 'xl' | 'xxl'
>;

export type TitleColor = Extract<
  Color,
  'black' | 'alto' | 'grey' | 'baseColor'
>;

type GetStyleInput = {
  color: TitleColor;
  size: TitleSize | TitleSize[];
  isCenter: boolean;
  maxLines: number;
};

export const getStyle = ({
  color,
  size,
  isCenter,
  maxLines,
}: GetStyleInput) => {
  const isMqSize = Array.isArray(size);

  const commonStyles: CSSInterpolation = {
    color: colors[color],
    lineHeight: lineHeights.m,
    fontWeight: fontWeight.bold,
    display: '-webkit-box',
    WebkitLineClamp: maxLines,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    ...(isCenter && {
      textAlign: 'center',
    }),
  };

  if (isMqSize) {
    return css(
      { ...commonStyles },
      mq({
        fontSize: size.map((s) => fontSizes[s]),
      })
    );
  }

  return css({
    ...commonStyles,
    fontSize: fontSizes[size],
  });
};
