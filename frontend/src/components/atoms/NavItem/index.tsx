import React from 'react';

import LinkText from '@/components/atoms/LinkText';

import { getSpacingSize, getFontSize, ItemSize } from './styles';

type Props = {
  label: string;
  path: string;
  size?: ItemSize;
};

const NavItem = ({ label, path, size = 'm' }: Props) => {
  return (
    <li className={getSpacingSize(size)}>
      <LinkText path={path} _styles={getFontSize(size)}>
        {label}
      </LinkText>
    </li>
  );
};

export default NavItem;
