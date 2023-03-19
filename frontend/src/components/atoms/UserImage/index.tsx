import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/common/constants/images';

import { getStyles, UserImageSize, USER_IMAGE_SIZE } from './styles';

type Props = {
  imagePath?: string | null;
  size: UserImageSize;
};

const UserImage: React.FC<Props> = ({ imagePath, size }) => {
  const style = getStyles(size);
  return (
    <div className={style.imageWrapper}>
      <Image
        src={imagePath || IMAGES.defaultUser}
        className={style.image}
        width={USER_IMAGE_SIZE[size]}
        height={USER_IMAGE_SIZE[size]}
      />
    </div>
  );
};

export default UserImage;
