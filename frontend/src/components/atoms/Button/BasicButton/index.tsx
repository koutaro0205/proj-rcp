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
  fontSize?: FontSizes;
};

const BasicButton: React.FC<Props> = ({
  label,
  onClick,
  color = 'black',
  backgroundColor = 'alto',
  isCircle = false,
  fontSize = 'm',
  ...buttonProps
}) => {
  const styles = getStyles({ color, backgroundColor, isCircle, fontSize });
  return (
    <button
      className={styles.container}
      onClick={onClick}
      {...buttonProps}
      type="button"
    >
      {label}
    </button>
  );
};

export default BasicButton;
