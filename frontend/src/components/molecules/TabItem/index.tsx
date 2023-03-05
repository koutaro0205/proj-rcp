import React from 'react';

import Icon from '@/components/atoms/Icon';

import styles from './styles';

type Props = {
  label: string;
  onClick?: () => void;
};

const TabItem: React.FC<Props> = ({ label, onClick }) => {
  return (
    <div className={styles.container} role="presentation" onClick={onClick}>
      <div className={styles.innerContainer}>
        <span>{label}</span>
        <Icon name="RIGHT_ARROW" size="xs" />
      </div>
    </div>
  );
};

export default TabItem;
