import { cx } from '@emotion/css';
import React from 'react';

import { CSSPropertyTextAlign } from '@/@types/styles';
import { Color } from '@/theme/colors';
import { LineHeights } from '@/theme/lineHeights';

import { getStyles } from './styles';

type Props = {
  children: React.ReactNode;
  _styles?: string;
  textAlign?: CSSPropertyTextAlign;
  lineHeight?: LineHeights;
  backgroundColor?: Color;
};

const Text: React.FC<Props> = ({
  children,
  _styles,
  textAlign = 'left',
  lineHeight = 'm',
  backgroundColor,
}) => {
  const style = getStyles({ textAlign, lineHeight, backgroundColor });
  return <p className={cx(style.text, _styles)}>{children}</p>;
};

export default Text;
