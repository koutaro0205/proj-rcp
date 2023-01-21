import Image from 'next/image';
import React from 'react';

import { ICONS } from '@/common/constants/icons';

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
        <Image
          src={ICONS.rightArrow}
          width={DEFAULT_ICON_SIZE}
          height={DEFAULT_ICON_SIZE}
        />
      </div>
    </div>
  );
};

export default TabItem;
