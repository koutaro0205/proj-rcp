import React from 'react';

import Icon, { IconSize } from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';

import styles from './styles';

type Props = {
  label?: string;
  size?: Extract<IconSize, 'xs' | 's'>;
  onClick: () => void;
  isChecked: boolean;
};

const Checkbox: React.FC<Props> = ({
  label,
  size = 's',
  onClick,
  isChecked = false,
}) => {
  return (
    <div className={styles.container} role="presentation" onClick={onClick}>
      <Icon size={size} name={isChecked ? 'CHECKED' : 'UNCHECKED'} />
      {label && <Text size="xs">{label}</Text>}
    </div>
  );
};

export default Checkbox;
