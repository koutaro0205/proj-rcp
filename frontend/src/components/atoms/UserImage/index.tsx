import Image from 'next/image';
import React from 'react';

import { IMAGES } from '@/common/constants/images';

import { getStyles, UserImageSize, getImageSize } from './styles';

type Props = {
  imagePath?: string;
  size: UserImageSize;
};

const UserImage: React.FC<Props> = ({
  imagePath = IMAGES.defaultUser,
  size,
}) => {
  const style = getStyles(size);
  return (
    <div className={style.imageWrapper}>
      <Image
        src={imagePath}
        className={style.image}
        width={getImageSize(size)}
        height={getImageSize(size)}
      />
    </div>
  );
};

export default UserImage;
