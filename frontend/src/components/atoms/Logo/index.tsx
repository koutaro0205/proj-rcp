import React from 'react';

import LinkText from '@/components/atoms/LinkText';

import styles from './styles';

type Props = {
  logoText: string;
  path: string;
};

const Logo = ({ logoText, path }: Props) => {
  return (
    <h1 className={styles.container}>
      <LinkText path={path} _styles={styles.linkText}>
        {logoText}
      </LinkText>
    </h1>
  );
};

export default Logo;
