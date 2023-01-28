import React from 'react';

import LinkText from '@/components/atoms/LinkText';

import styles from './styles';

type Props = {
  logoText: string;
  path: string;
};

const Logo: React.FC<Props> = ({ logoText, path }) => {
  return (
    <h1 className={styles.container}>
      <LinkText path={path} color="baseColor" size="xl">
        {logoText}
      </LinkText>
    </h1>
  );
};

export default Logo;
