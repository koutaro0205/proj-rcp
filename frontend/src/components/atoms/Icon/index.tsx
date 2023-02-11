import Image from 'next/image';
import React from 'react';

import { Icons, ICONS } from '@/common/constants/icons';

type Props = {
  size: number | string;
  name: Icons;
  onClick?: () => void;
};

const Icon: React.FC<Props> = ({ size, name, onClick }) => {
  return (
    <Image src={ICONS[name]} width={size} height={size} onClick={onClick} />
  );
};

export default Icon;
