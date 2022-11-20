import React from 'react';

import LinkText from '@/components/atoms/LinkText';

import { getSpacingSize, getFontSize, ItemSize } from './styles';

type Props = {
  children: string | React.ReactNode;
  path: string;
  size?: ItemSize;
};

const NavItem: React.FC<Props> = ({ children, path, size = 'm' }) => {
  return (
    <li className={getSpacingSize(size)}>
      <LinkText path={path} _styles={getFontSize(size)}>
        {children}
      </LinkText>
    </li>
  );
};

export default NavItem;
