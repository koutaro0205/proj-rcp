import Image from 'next/image';
import React from 'react';

import { ICONS } from '@/common/constants/icons';
import { Color } from '@/theme/colors';

import { getStyles } from './styles';

type Props = {
  label: string;
  onClick: () => void;
  color?: Color;
  backgroundColor?: Color;
};

const DEFAULT_ICON_SIZE = '20px';

const DeleteButton: React.FC<Props> = ({
  label,
  onClick,
  color = 'black',
  backgroundColor = 'alto',
}) => {
  const styles = getStyles({ color, backgroundColor });
  return (
    <button className={styles.container} onClick={onClick}>
      {label}
      <span className={styles.imageWrapper}>
        <Image
          src={ICONS.delete}
          width={DEFAULT_ICON_SIZE}
          height={DEFAULT_ICON_SIZE}
        />
      </span>
    </button>
  );
};

export default DeleteButton;
