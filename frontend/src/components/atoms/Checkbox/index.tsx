import React from 'react';

import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';

import styles from './styles';

type Props = {
  label?: string;
  size?: 's' | 'm';
  onClick: () => void;
  isChecked: boolean;
};

const CHECKBOX_SIZE = {
  s: 12,
  m: 18,
};

const Checkbox: React.FC<Props> = ({
  label,
  size = 'm',
  onClick,
  isChecked = false,
}) => {
  return (
    <div className={styles.container} role="presentation" onClick={onClick}>
      <Icon
        size={CHECKBOX_SIZE[size]}
        name={isChecked ? 'checked' : 'unchecked'}
      />
      {label && <Text size="xs">{label}</Text>}
    </div>
  );
};

export default Checkbox;
