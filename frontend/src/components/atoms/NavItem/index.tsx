import React from 'react';

import LinkText from '@/components/atoms/LinkText';

import { getStyles, SpacingSize } from './styles';

type Props = {
  children: string | React.ReactNode;
  path: string;
  spacingSize?: SpacingSize;
};

const NavItem: React.FC<Props> = ({ children, path, spacingSize = 'm' }) => {
  const styles = getStyles(spacingSize);
  return (
    <li className={styles.container}>
      <LinkText path={path} color="black" size="s">
        {children}
      </LinkText>
    </li>
  );
};

export default NavItem;
