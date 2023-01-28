import { css } from '@emotion/css';

import colors, { Color } from '@/theme/colors';

type DividerColor = Extract<Color, 'alto' | 'black'>;
type DividerWidth = 's' | 'm' | 'l';

const borderWidth = {
  s: 1,
  m: 1.5,
  l: 2,
};

export type GetStylesInput = {
  color?: DividerColor;
  width?: DividerWidth;
  pattern: 'horizontal' | 'vertical';
};

export const getStyles = ({
  color = 'alto',
  width = 'm',
  pattern,
}: GetStylesInput) => {
  const dividerColor = colors[color];
  const dividerWidth = borderWidth[width];
  const isHorizontal = pattern === 'horizontal';

  return {
    container: css({
      backgroundColor: dividerColor,
      width: isHorizontal ? '100%' : dividerWidth,
      height: isHorizontal ? dividerWidth : '100%',
    }),
  };
};
