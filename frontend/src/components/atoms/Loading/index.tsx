import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/common/constants/images';
import { Queue } from '@/components/layouts/Queue';
import colors, { Color } from '@/theme/colors';

import styles from './styles';

const DEFAULT_LOADING_TEXT = 'Loading...';
const LOADING_IMAGE_SIZE = {
  s: '30px',
  m: '50px',
};

type Props = {
  children?: string;
  size?: keyof typeof LOADING_IMAGE_SIZE;
  color?: Extract<Color, 'black' | 'white'>;
};

const Loading: React.FC<Props> = ({
  children = DEFAULT_LOADING_TEXT,
  size = 's',
  color = 'black',
}) => {
  return (
    <div className={styles.container}>
      <Image
        src={IMAGES.loading}
        className={styles.image}
        width={LOADING_IMAGE_SIZE[size]}
        height={LOADING_IMAGE_SIZE[size]}
      />
      <Queue size="m" />
      <span style={{ color: colors[color] }}>{children}</span>
    </div>
  );
};

export default Loading;
