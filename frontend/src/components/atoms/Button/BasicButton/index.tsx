import React from 'react';

import { Color } from '@/theme/colors';
import { FontSizes } from '@/theme/fontSize';

import { getStyles } from './styles';

type Props = {
  label: string;
  onClick: () => void;
  color?: Color;
  backgroundColor?: Color;
  isCircle?: boolean;
  isTransparent?: boolean;
  fontSize?: Extract<FontSizes, 'xxs' | 'xs' | 's' | 'm'>;
};

const BasicButton: React.FC<Props> = ({
  label,
  onClick,
  color = 'black',
  backgroundColor = 'alto',
  isCircle = false,
  isTransparent = false,
  fontSize = 'm',
  ...buttonProps
}) => {
  const styles = getStyles({
    color,
    backgroundColor,
    isCircle,
    fontSize,
    isTransparent,
  });
  return (
    <button
      className={styles.container}
      onClick={onClick}
      type="button"
      {...buttonProps}
    >
      {label}
    </button>
  );
};

export default BasicButton;
