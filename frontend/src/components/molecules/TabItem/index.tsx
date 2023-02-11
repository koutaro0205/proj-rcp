import React from 'react';

import Icon from '@/components/atoms/Icon';

import styles from './styles';

type Props = {
  label: string;
  onClick?: () => void;
};

const DEFAULT_ICON_SIZE = '16px';

const TabItem: React.FC<Props> = ({ label, onClick }) => {
  return (
    <div className={styles.container} role="presentation" onClick={onClick}>
      <div className={styles.innerContainer}>
        <span>{label}</span>
        <Icon name="rightArrow" size={DEFAULT_ICON_SIZE} />
      </div>
    </div>
  );
};

export default TabItem;
