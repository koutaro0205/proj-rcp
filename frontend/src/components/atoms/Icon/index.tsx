import React from 'react';

import { Icons, ICONS } from '@/common/constants/icons';
import { Color } from '@/theme/colors';

export type IconSize = 'xs' | 's' | 'm' | 'l';

const ICON_SIZE: Record<IconSize, number> = {
  xs: 16,
  s: 20,
  m: 36,
  l: 48,
} as const;

type Props = {
  name: Icons;
  size?: IconSize;
  fill?: Color;
  stroke?: Color;
  onClick?: () => void;
};

const Icon: React.FC<Props> = ({
  size = 'm',
  name,
  onClick,
  fill = 'black',
  stroke = 'transparent',
}) => {
  const iconSize = ICON_SIZE[size];
  const IconElement = ICONS[name];
  return (
    <IconElement
      width={iconSize}
      height={iconSize}
      onClick={onClick}
      fill={fill}
      stroke={stroke}
    />
  );
};

export default Icon;
