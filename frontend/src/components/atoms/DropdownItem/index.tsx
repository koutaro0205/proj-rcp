import React from 'react';

import LinkText from '@/components/atoms/LinkText';

import styles from './styles';

type Props = {
  label: string;
  path?: string;
  _styles?: string;
  onClick?: () => void;
};

const DropdownItem: React.FC<Props> = ({ path, label, _styles, onClick }) => {
  const getItem = () => {
    if (path) {
      return <LinkText path={path}>{label}</LinkText>;
    }
    return (
      <span onClick={onClick} role="presentation" className={_styles}>
        {label}
      </span>
    );
  };
  return <li className={styles.container}>{getItem()}</li>;
};

export default DropdownItem;
