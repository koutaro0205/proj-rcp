import Image from 'next/image';
import React from 'react';

import { DEFAULT_IMAGE_PATH } from '@/common/constants/path';

import styles, { USER_IMAGE_SIZE } from './styles';

type Props = {
  imagePath?: string;
};

const UserImage: React.FC<Props> = ({ imagePath = DEFAULT_IMAGE_PATH }) => {
  return (
    <div className={styles.imageWrapper}>
      <Image
        src={imagePath}
        className={styles.image}
        width={USER_IMAGE_SIZE}
        height={USER_IMAGE_SIZE}
      />
    </div>
  );
};

export default UserImage;
