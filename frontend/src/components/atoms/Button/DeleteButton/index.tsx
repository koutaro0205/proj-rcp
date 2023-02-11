import React from 'react';

import Icon from '@/components/atoms/Icon';
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
        <Icon size={DEFAULT_ICON_SIZE} name="delete" />
      </span>
    </button>
  );
};

export default DeleteButton;
