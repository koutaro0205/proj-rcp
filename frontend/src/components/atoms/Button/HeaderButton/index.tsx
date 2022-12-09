import React from 'react';

import LinkText from '@/components/atoms/LinkText';

import styles from './styles';

type Props = {
  label: string;
  path: string;
};

const HeaderButton: React.FC<Props> = ({ label, path }) => {
  return (
    <li className={styles.container}>
      <LinkText path={path}>{label}</LinkText>
    </li>
  );
};

export default HeaderButton;
