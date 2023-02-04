import React from 'react';

import LinkText from '@/components/atoms/LinkText';
import { FontSizes } from '@/theme/fontSize';

import styles from './styles';

type Props = {
  children: string | React.ReactNode;
  path: string;
  size?: FontSizes;
};

const NavigationItem: React.FC<Props> = ({ children, path, size = 's' }) => {
  return (
    <li className={styles.container}>
      <LinkText path={path} color="black" size={size}>
        {children}
      </LinkText>
    </li>
  );
};

export default NavigationItem;
