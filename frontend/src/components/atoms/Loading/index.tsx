import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/common/constants/images';

import styles from './styles';

const DEFAULT_LOADING_TEXT = 'Loading...';
const LOADING_IMAGE_SIZE = {
  s: '30px',
  m: '50px',
};

type Props = {
  children?: string;
  size?: keyof typeof LOADING_IMAGE_SIZE;
};

const Loading: React.FC<Props> = ({
  children = DEFAULT_LOADING_TEXT,
  size = 's',
}) => {
  return (
    <div className={styles.container}>
      <Image
        src={IMAGES.loading}
        className={styles.image}
        width={LOADING_IMAGE_SIZE[size]}
        height={LOADING_IMAGE_SIZE[size]}
      />
      {children}
    </div>
  );
};

export default Loading;
