import React from 'react';

import { Color } from '@/theme/colors';
import { FontSizes } from '@/theme/fontSize';

import {
  getStyles,
  LABEL_TEXT,
  SpecificPattern,
  DefaultPattern,
} from './styles';

type BaseProps = {
  size?: FontSizes;
  isRoundCorner?: boolean;
};

type SpecificProps = {
  pattern: SpecificPattern;
  // DefaultProps
  lablelText?: never;
  color?: never;
  backgroundColor?: never;
} & BaseProps;

type DefaultProps = {
  pattern?: DefaultPattern;
  lablelText: string;
  color?: Color;
  backgroundColor?: Color;
} & BaseProps;
type Props = DefaultProps | SpecificProps;

const Label: React.FC<Props> = ({
  pattern = 'default',
  size = 'xs',
  isRoundCorner = false,
  lablelText,
  color = 'baseColor',
  backgroundColor = 'white',
}) => {
  const styles = getStyles({
    pattern,
    size,
    isRoundCorner,
    color,
    backgroundColor,
  });
  return (
    <span className={styles}>
      {pattern === 'default' ? lablelText : LABEL_TEXT[pattern]}
    </span>
  );
};

export default Label;
